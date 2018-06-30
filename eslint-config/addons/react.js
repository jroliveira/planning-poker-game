module.exports = {
  extends: ['../rules/react', '../rules/jsx-a11y'].map(require.resolve),
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
