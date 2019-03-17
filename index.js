const EditJsonFile = require('edit-json-file');
const packageJson = EditJsonFile(`./package.json`)
const {createProdDep, createDevDep} = require('./args') 

const pipe = (...args) => () => args.reduce((acc, fn) => fn(acc),{})

const PROD_DEPENDENCIES = 'dependencies';
const DEV_DEPENDENCIES = 'devDependencies';


const readPackage = (dep) => () => packageJson.get(dep)

const getCurrentVersion = (package) => new EditJsonFile(`./node_modules/${package}/package.json`).get('version');

const getNewPackageVersions = (dep) => Object.keys(dep).map(dep => {
    return { [dep]: getCurrentVersion(dep) }
});

const setNewPackageJson = (type) => (dep) => {
    dep.forEach((package) => {
        packageJson.set(`${type}.${Object.keys(package)[0]}`,Object.values(package)[0])
    });
    packageJson.save()
}

const setNewPackageJsonProd = setNewPackageJson(PROD_DEPENDENCIES)
const setNewPackageJsonDev = setNewPackageJson(DEV_DEPENDENCIES)

const readDependenciesProd = readPackage(PROD_DEPENDENCIES)
const readDependenciesDev = readPackage(DEV_DEPENDENCIES)

const createPackageProd = pipe(readDependenciesProd, getNewPackageVersions, setNewPackageJsonProd)
const createPackageDev = pipe(readDependenciesDev, getNewPackageVersions, setNewPackageJsonDev)

createProdDep && createPackageProd();
createDevDep && createPackageDev();