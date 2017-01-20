var program = require('commander');

program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'defaultValue')
  .option('-a, --hello', '123', '456')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
if (program.hello) console.log('  - 789');

console.log('peppers: %s', program.peppers);
console.log('bbq: %s', program.bbq);
console.log('sauce: %s', program.sauce);
console.log('bbqSauce: %s', program.bbqSauce);
console.log('cheese: %s', program.cheese);
