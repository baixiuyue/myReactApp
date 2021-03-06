module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'off',
      {
        args: 'none',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        caughtErrors: 'none',
      },
    ],
  },
};
