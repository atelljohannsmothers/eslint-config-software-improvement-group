module.exports = {
  extends: ["./rules/software-improvement-group"].map(require.resolve),
  rules: {
    "max-statements": "warn",
    "max-statements-per-line": "warn",
    complexity: "warn",
    "max-params": "warn",
    "no-empty": "warn",
    "no-extra-semi": "warn",
    "no-empty-function": "warn",
    "no-unused-expressions": "warn",
    "no-unused-vars": "warn",
    "no-magic-numbers": "warn"
  }
};
