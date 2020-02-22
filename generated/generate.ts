import Debug from 'debug';
import { Profile } from '../src/client/contracts/profile';
import config from '../examples/config.json';
import { createTarkov } from '../src';
import { execSync } from 'child_process';
import { promisify } from 'util';
import { writeFileSync } from 'fs';

const debug = Debug('tarkov:generate');

// Used for generating json responses which are in turn used to generate typescript types.

function generateJson(path, data) {
  writeFileSync(path, JSON.stringify(data));

  execSync(
    `./node_modules/.bin/prettier --config ./prettier.config.js --write ${path}`
  );
}

function generateTs(input, output) {
  execSync(`./node_modules/.bin/quicktype ${input} -o ${output} --just-types`);

  execSync(
    `./node_modules/.bin/prettier --config ./prettier.config.js --write ${output}`
  );
}

(async () => {
  const tarkov = createTarkov(config);

  // Login flow
  await tarkov.launcher.getDistribution();
  await tarkov.launcher.login();
  await tarkov.launcher.getConfig();
  await tarkov.launcher.getPatches();
  const {
    data: { session },
  } = await tarkov.launcher.start();

  // Manually set session
  tarkov.client.session = session;

  // Get profiles and select
  const profiles = await tarkov.getProfiles();
  generateJson('./generated/profiles-response.json', profiles);

  const profile = await tarkov.getProfile();
  generateJson('./generated/profile.json', profile);
  generateTs('./generated/profile.json', './src/interfaces/profile.ts');

  const selectResponse = await tarkov.client.selectProfile(profile._id);
  generateJson('./generated/select-response.json', selectResponse);

  const items = await tarkov.getItems();
  generateJson('./generated/items.json', items);
  generateTs('./generated/items.json', './src/interfaces/item.ts');

  const traders = await tarkov.getTraders();
  generateJson('./generated/traders-response.json', traders);

  const trader = traders.find(trader => trader.nickname === 'Терапевт');
  generateJson('./generated/trader.json', trader);
  generateTs('./generated/trader.json', './src/interfaces/trader.ts');
})();
