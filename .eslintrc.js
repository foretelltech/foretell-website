module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  "rules": {
    "no-debugger": "off",
    "no-console": "off",
    "undefined": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "semi": [
      "error",
      "never"
    ],
    "indent": ["error", 2]
  }
}