import lodash from 'lodash';

const allowedModules = new Map([
  ['lodash', lodash]
]);

const modulesCache = new Map();

function require(name) {
  if (!allowedModules.has(name)) {
    throw new Error(`You can't use module "${name}" in remote component.`);
  }
  return allowedModules.get(name);
}

export default async function (url) {
  if (modulesCache.has(url)) {
    return modulesCache.get(url);
  }
  const response = await fetch(url);
  const source = await response.text();
  const exports = {};
  const module = {};
  const loadedModule = eval(source);
  console.log('res', loadedModule);
  const result = loadedModule.__esModule ? loadedModule.default : loadedModule;
  modulesCache.set(url, result);
  return result;
}
