module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  "env": {
    "browser": true,
    "amd": true,
    "node": true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-inferrable-types": "off"
  }
};
