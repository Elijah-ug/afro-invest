import { adminSeeder } from './adminSeed';
import { plansSeeder } from './planSeeder';

async function main() {
  (await adminSeeder(), await plansSeeder());
}
main()
  .then(() => {
    console.log('✅ All seeds done');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
