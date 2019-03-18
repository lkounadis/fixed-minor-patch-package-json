const { PROD_DEPENDENCIES, DEV_DEPENDENCIES } = require('./constants');

function saveTag([ strA, strB, strC ], prod, dev) {
    const EMPTY_PLACEHOLDER = '';
    const prodString = prod && PROD_DEPENDENCIES;
    const devString = dev && DEV_DEPENDENCIES;
    return `${strA}${prodString || EMPTY_PLACEHOLDER}${strB}${devString || EMPTY_PLACEHOLDER}${strC}`
}

const pipe = (...args) => () => args.reduce((acc, fn) => fn(acc),{});

module.exports = {
    pipe,
    saveTag
};
