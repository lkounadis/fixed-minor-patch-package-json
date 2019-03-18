const EditJsonFile = require('edit-json-file');
const packageJson = EditJsonFile(`./package.json`, {});
const {createProdDep, createDevDep, patchVersions, minorVersions, fixVersions} = require('./args')
const chalk = require('chalk');
const {pipe, saveTag} = require('./utils');
const { PROD_DEPENDENCIES, DEV_DEPENDENCIES } = require('./constants');


const readPackage = (dep) => () => packageJson.get(dep);

const getCurrentVersion = (package) => new EditJsonFile(`./node_modules/${package}/package.json`).get('version');

const getNewPackageVersions = (dep) => Object.keys(dep).map(dep => {
    return { [dep]: getCurrentVersion(dep) }
});

const semver = patchVersions||minorVersions||fixVersions;

const setNewPackageJson = (type) => (dep) => {
    dep && dep.forEach((package) => {
        packageJson.set(`${type}.${Object.keys(package)[0]}`,`${semver}${Object.values(package)[0]}`)
    });
};

const savePackageJson = ()=>{
    packageJson.save(function(){
        console.info(chalk.green(saveTag `Successfully updated ${createProdDep} ${createDevDep} in package.json`))
    });
};

const setNewPackageJsonProd = setNewPackageJson(PROD_DEPENDENCIES);
const setNewPackageJsonDev = setNewPackageJson(DEV_DEPENDENCIES);

const readDependenciesProd = readPackage(PROD_DEPENDENCIES);
const readDependenciesDev = readPackage(DEV_DEPENDENCIES);

const createPackageProd = pipe(readDependenciesProd, getNewPackageVersions, setNewPackageJsonProd);
const createPackageDev = pipe(readDependenciesDev, getNewPackageVersions, setNewPackageJsonDev);

createProdDep && createPackageProd();
createDevDep && createPackageDev();

savePackageJson();

