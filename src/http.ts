import fetch, { RequestInit, Response } from 'node-fetch';

import Debug from 'debug';
import { promisify } from 'util';
import zlib from 'zlib';

const debug = Debug('tarkov:http');

export const unzip: (arrayBuffer: ArrayBuffer) => Promise<Buffer> = promisify(
  zlib.unzip
);

export class TarkovError extends Error {
  code: number;
  constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }
}

export interface TarkovResponse {
  err: number;
  errmsg: string;
  data: any | any[];
}

function errorHandler(err: number, errmsg: string): void {
  debug(err, errmsg);
  throw new TarkovError(err, errmsg);
}

async function responseHandler(response: Response): Promise<TarkovResponse> {
  const buffer = await unzip(await response.arrayBuffer());
  return JSON.parse(buffer.toString());
}

export async function request(
  url: string,
  options: RequestInit = {}
): Promise<TarkovResponse> {
  debug(`Request: ${url}`);

  debug('Headers:', options.headers);

  const body = options.body || JSON.stringify({});

  debug('Body:', body);

  const response = await responseHandler(
    await fetch(url, {
      method: 'POST',
      ...options,
      body,
    })
  );

  if (response.err) {
    errorHandler(response.err, response.errmsg);
  }

  if (
    response.data &&
    response.data.badRequest &&
    response.data.badRequest.length
  ) {
    errorHandler(
      response.data.badRequest[0].err,
      response.data.badRequest[0].errmsg
    );
  }

  return response;
}
