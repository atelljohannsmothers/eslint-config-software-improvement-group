export default {
  rules: {
    'max-statements': [
      'warn',
      {
        max: 15
      }
    ],
    'max-statements-per-line': [
      'warn',
      {
        max: 1
      }
    ],
    complexity: [
      'warn',
      {
        max: 5
      }
    ],
    'max-params': [
      'warn',
      {
        max: 4
      }
    ],
    'no-empty': [
      'warn',
      {
        allowEmptyCatch: false
      }
    ],
    'no-extra-semi': 'warn',
    'no-empty-function': [
      'warn',
      {
        allow: []
      }
    ],
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false
      }
    ],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: false,
        caughtErrors: 'none'
      }
    ],
    'no-magic-numbers': [
      'warn',
      {
        ignore: [],
        ignoreArrayIndexes: false,
        enforceConst: true,
        detectObjects: true
      }
    ]
  }
}
