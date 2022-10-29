module.exports = {
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    "no-restricted-syntax": 0,
    "import/no-extraneous-dependencies": 
      ["error", {"devDependencies": true}],
  },
};