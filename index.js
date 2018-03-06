module.exports = {
  extends: ["./rules/software-improvement-group"].map(require.resolve),
  rules: {
    "max-statements": "error",
    "max-statements-per-line": "error",
    complexity: "error",
    "max-params": "error",
    "no-empty": "error",
    "no-extra-semi": "error",
    "no-empty-function": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": "error",
    "no-magic-numbers": "error"
  }
};
