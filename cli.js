#!/usr/bin/env node

const path = require('canonical-path');
const program = require('commander');
const shell = require('shelljs');

program
  .version('1.0.0')
  .usage('<command> [option]')
  .description('Eve CLI')
  .option('start [project,app]', 'project or app source code')
  .parse(process.argv);

switch (program.start) {
  case 'app':
    console.warn('Not implemented');
    break;
  case 'project':
    shell.cp('-R', path.join(__dirname, 'eve-start'), '.');
    break;
  default:
    console.error('Bad option');
    shell.exit(1);
}
