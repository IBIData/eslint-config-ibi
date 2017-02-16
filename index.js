module.exports = {

    extends: 'airbnb-base',

    plugins: [
        'import',
    ],

    env: {
        es6: true,
        browser: true,
        node: true,
        jquery: true,
    },

    globals: {
        main: true,
    },

    parserOptions: {
        ecmaVersion: 6,
    },

    rules: {

        // Requires braces around arrow functions
        // Doesn't work with promise chain return functions
        'arrow-body-style': [
            'error',
            'as-needed',
        ],

        // should only have parens if arrow function has more than 1 arg
        'arrow-parens': [
            'warn',
            'as-needed',
        ],

        // Expects commas after functions
        'comma-dangle': [
            'warn',
            {
                arrays: 'always',
                objects: 'always',
                imports: 'never',
                exports: 'never',
                functions: 'ignore',
            },
        ],

        // functions do not always need a return
        'consistent-return': 0,

        // functions can be anonymous
        'func-names': 0,

        // require() does not need to be at the top of the page
        'global-require': 0,

        // for in loops do not need to be wrapped in an if statement to protect from type
        'guard-for-in': 0,

        // override airbnb and make sure spaces are 4 spaces instead of tabs
        indent: [
            'error',
            4,
        ],

        // prevent LF vs CRLF errors
        'linebreak-style': 0,

        // do not worry about a line length, default max length is 100
        'max-len': 0,

        // allow ~~
        'no-bitwise': 0,

        // console is allowed
        'no-console': 0,

        // allow the use of 'continue' within loops
        'no-continue': 0,

        // allow !!
        'no-extra-boolean-cast': 0,

        // allow consecutive operators without parentheses
        'no-mixed-operators': 0,

        // allow multiple lines greater than 2
        'no-multiple-empty-lines': [
            'warn',
            {
                max: 2,
                maxEOF: 1,
            },
        ],

        // do not reassign function param variables, properties of the variable are alright
        'no-param-reassign': 0,

        // allow i++ and i--
        'no-plusplus': 0,

        // able to do this 'foo.hasOwnProperty('bar')' vs only this 'Object.prototype.hasOwnProperty.call(foo, 'bar')'
        'no-prototype-builtins': 0,

        // we should be able to use all properties. this allows the use of Math.pow
        'no-restricted-properties': 0,

        // do not prevent any JavaScript syntax, 'class, try-catch...'
        'no-restricted-syntax': 0,

        // child functions can have variables named the same as the parent
        'no-shadow': 0,

        // Doesn't allow underscore prefixed properties on objects
        'no-underscore-dangle': 0,

        // no unused vars, except for function arguments
        'no-unused-vars': [
            'warn',
            {
                args: 'none',
            },
        ],

        // functions are allowed to be hoisted
        'no-use-before-define': 0,

        // regex escape, might need to support older regex?
        'no-useless-escape': 0,

        // expects arrow functions for object functions
        'object-shorthand': 0,

        // do not worry about the spacing within the block
        'padded-blocks': [
            'error',
            {
                switches: 'never',
            },
        ],

        // arrow functions are not necessary
        'prefer-arrow-callback': 0,

        // when using let instead of const and no reassignment, only give a warning, no error
        'prefer-const': [
            'warn',
        ],

        // prefer using `hello, ${name}` vs 'hello, ' + name
        'prefer-template': 0,

        // parse functions don't require a radix, defaults to 10
        radix: [
            'error',
            'as-needed',
        ],

        // do not enforece a space after a '//' comment
        'spaced-comment': 0,

        // we need to have 'use strict' right now until we get our new webserver setup
        strict: [
            0,
            'global',
        ],

    },
};

// TESTING 3
