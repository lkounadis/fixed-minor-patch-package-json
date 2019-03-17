const args = process.argv;
const parseArgs = require('minimist')
const parsedArgs = parseArgs(args);

const devDeps = parsedArgs.dev;
const prodDeps = parsedArgs.prod;
const bothDeps = !devDeps && !prodDeps;

const createProdDep = prodDeps || bothDeps;
const createDevDep = devDeps || bothDeps;

module.exports = {
    createProdDep,
    createDevDep
}