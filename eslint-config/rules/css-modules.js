// CSS Modules: https://github.com/atfzl/eslint-plugin-css-modules

module.exports = {
  rules: {
    // Force use of all the classes defined in your css/scss/less file
    // It's a warning because it gives some false positives
    // See https://gitlab.fftech.info/mondrian/eslint-config/issues/26
    'css-modules/no-unused-class': 1,

    // Disallow use of non-existing classes
    'css-modules/no-undef-class': 1,
  },
};
