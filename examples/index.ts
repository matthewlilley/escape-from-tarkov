import config from './config.json';
import { createTarkov } from '../src';

(async () => {
  const tarkov = createTarkov(config);

  await tarkov.login();
})();
