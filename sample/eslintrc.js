// Eslint rules applies to eslintrc.js file ?
module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		/* Possible Errors */
		'for-direction': 'error', // Enforce “for” loop update clause moving the counter in the right direction
		'getter-return': [
			'error',
			{
				// Enforces that a return statement is present in property getters
				allowImplicit: true,
			},
		],
		'no-async-promise-executor': 'error', // disallow using an async function as a Promise executor
		'no-await-in-loop': 'error', // disallow await inside of loops
		'no-compare-neg-zero': 'error', // disallow comparisons to negative zero
		'no-cond-assign': ['error', 'always'], // disallow assignment in conditional expressions
		'no-console': 'warn', // disallow use of console
		'no-constant-condition': 'warn', // disallow use of constant expressions in conditions
		'no-control-regex': 'error', // disallow control characters in regular expressions
		'no-debugger': 'error', // disallow use of debugger
		'no-dupe-args': 'error', // disallow duplicate arguments in functions
		'no-dupe-else-if': 'error', // disallow duplicate conditions in if-else-if chains
		'no-dupe-keys': 'error', // disallow duplicate keys when creating object literals
		'no-duplicate-case': 'error', // disallow a duplicate case label.
		'no-empty': 'error', // disallow empty statements
		'no-empty-character-class': 'error', // disallow the use of empty character classes in regular expressions
		'no-ex-assign': 'error', // disallow reassigning to the exception in a catch block
		'no-extra-boolean-cast': 'error', // disallow double-negation boolean casts in a boolean context
		'no-extra-parens': ['off'], // disallow unnecessary parentheses
		'no-extra-semi': 'error', // disallow unnecessary semicolons
		'no-func-assign': 'error', // disallow overwriting functions written as function declarations
		'no-import-assign': 'error', // disallow assigning to imported bindings
		'no-inner-declarations': 'error', // disallow function or variable declarations in nested blocks
		'no-invalid-regexp': 'error', // disallow invalid regular expression strings in the RegExp constructor
		'no-irregular-whitespace': 'error', // disallow irregular whitespace outside of strings and comments
		'no-misleading-character-class': 'error', // Disallow characters which are made with multiple code points in character class syntax
		'no-obj-calls': 'error', // disallow the use of object properties of the global object (Math and JSON) as functions
		'no-prototype-builtins': 'error', // disallow use of Object.prototypes builtins directly
		'no-regex-spaces': 'error', // disallow multiple spaces in a regular expression literal
		'no-setter-return': 'off', // Disallow returning values from setters
		'no-sparse-arrays': 'error', // disallow sparse arrays
		'no-template-curly-in-string': 'error', // Disallow template literal placeholder syntax in regular strings
		'no-unexpected-multiline': 'error', // disallow confusing multiline expressions
		'no-unreachable': 'warn', // disallow unreachable statements after a return, throw, continue, or break statement
		'no-unsafe-finally': 'error', // disallow return/throw/break/continue inside finally blocks
		'no-unsafe-negation': 'error', // disallow negating the left operand of relational operators
		'require-atomic-updates': 'off', // Disallow assignments that can lead to race conditions due to usage of await or yield
		'use-isnan': 'error', // disallow comparisons with the value NaN
		'valid-typeof': [
			'error',
			{
				// ensure that the results of typeof are compared against a valid string
				requireStringLiterals: true,
			},
		],

		/* Best practices */
		'accessor-pairs': 'off', // enforces getter/setter pairs in objects
		'array-callback-return': [
			'error',
			{
				// enforces return statements in callbacks of array's methods
				allowImplicit: true,
			},
		],
		'block-scoped-var': 'error', // treat var statements as if they were block scoped
		'class-methods-use-this': [
			'error',
			{
				// enforce that class methods use "this"
				exceptMethods: [],
			},
		],
		complexity: 'off', // specify the maximum cyclomatic complexity allowed in a program
		'consistent-return': 'error', // require return statements to either always or never specify values
		curly: ['error', 'all'], // specify curly brace conventions for all control statements
		'default-case': [
			'error',
			{
				// require default case in switch statements
				commentPattern: '^no default$',
			},
		],
		// 'default-case-last': "error", // default case should be last case in switch statements
		'default-param-last': ['error'], // enforce default parameters should be at the end of a function
		'dot-location': ['error', 'property'], // enforces consistent newlines before or after dots
		'dot-notation': [
			'error',
			{
				// encourages use of dot notation whenever possible
				allowKeywords: true,
			},
		],
		eqeqeq: [
			'error',
			'always',
			{
				null: 'ignore',
			},
		], // require the use of === and !==
		'grouped-accessor-pairs': 'off', // Require grouped accessor pairs in object literals and classes
		'guard-for-in': 'error', // make sure for-in loops have an if statement
		'max-classes-per-file': ['error', 1], // enforce a maximum number of classes per file
		'no-alert': 'warn', // disallow the use of alert, confirm, and prompt
		'no-caller': 'error', // disallow use of arguments.caller or arguments.callee
		'no-case-declarations': 'error', // disallow lexical declarations in case/default clauses
		'no-constructor-return': 'off', // Disallow returning value in constructor
		'no-div-regex': 'error', // disallow division operators explicitly at beginning of regular expression
		'no-else-return': ['error'], // disallow else after a return in an if
		'no-empty-function': [
			'error',
			{
				// disallow empty functions, except for standalone funcs/arrows
				allow: ['arrowFunctions', 'functions', 'methods'],
			},
		],
		'no-empty-pattern': 'error', // disallow empty destructuring patterns
		'no-eq-null': 'off', // disallow comparisons to null without a type-checking operator
		'no-eval': 'error', // disallow use of eval()
		'no-extend-native': [
			'error',
			{
				exceptions: [],
			},
		], // disallow adding to native types
		'no-extra-bind': 'error', // disallow unnecessary function binding
		'no-extra-label': 'error', // disallow Unnecessary Labels
		'no-fallthrough': 'error', // disallow fallthrough of case statements
		'no-floating-decimal': 'error', // disallow the use of leading or trailing decimal points in numeric literals
		'no-global-assign': [
			'error',
			{
				exceptions: [],
			},
		], // disallow reassignments of native objects or read-only globals
		'no-implicit-coercion': [
			'off',
			{
				// disallow implicit type conversions
				boolean: false,
				number: true,
				string: true,
				allow: [],
			},
		],
		'no-implicit-globals': 'off', // disallow var and named functions in global scope
		'no-implied-eval': 'error', // disallow use of eval()-like methods
		'no-invalid-this': 'off', // disallow this keywords outside of classes or class-like objects
		'no-iterator': 'error', // disallow usage of __iterator__ property
		'no-labels': [
			'error',
			{
				// disallow use of labels for anything other then loops and switches
				allowLoop: false,
				allowSwitch: false,
			},
		],
		'no-lone-blocks': 'error', // disallow unnecessary nested blocks
		'no-loop-func': 'error', // disallow creation of functions within loops
		'no-magic-numbers': ['off'], // disallow magic numbers
		'no-multi-spaces': [
			'error',
			{
				// disallow use of multiple spaces
				ignoreEOLComments: false,
			},
		],
		'no-multi-str': 'error', // disallow use of multiline strings
		'no-new': 'error', // disallow use of new operator when not part of the assignment or comparison
		'no-new-func': 'error', // disallow use of new operator for Function object
		'no-new-wrappers': 'error', // disallows creating new instances of String, Number, and Boolean
		'no-octal': 'error', // disallow use of (old style) octal literals
		'no-octal-escape': 'error', // disallow use of octal escape sequences in string literals
		'no-param-reassign': [
			'error',
			{
				// disallow reassignment of function parameters
				props: false,
			},
		],
		'no-proto': 'error', // disallow usage of __proto__ property
		'no-redeclare': 'error', // disallow declaring the same variable more then once
		'no-restricted-properties': [
			'error',
			{
				// disallow certain object properties
				object: 'arguments',
				property: 'callee',
				message: 'arguments.callee is deprecated',
			},
			{
				object: 'global',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'self',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'window',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'global',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				object: 'self',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				object: 'window',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				property: '__defineGetter__',
				message: 'Please use Object.defineProperty instead.',
			},
			{
				property: '__defineSetter__',
				message: 'Please use Object.defineProperty instead.',
			},
			{
				object: 'Math',
				property: 'pow',
				message: 'Use the exponentiation operator (**) instead.',
			},
		],
		'no-return-assign': ['error', 'always'], // disallow use of assignment in return statement
		'no-return-await': 'off', // disallow redundant `return await`
		'no-script-url': 'error', // disallow use of `javascript:` urls.
		'no-self-assign': [
			'error',
			{
				// disallow certain object properties
				props: true,
			},
		],
		'no-self-compare': 'error', // disallow comparisons where both sides are exactly the same
		'no-sequences': 'error', // disallow use of comma operator
		'no-throw-literal': 'error', // restrict what can be thrown as an exception
		'no-unmodified-loop-condition': 'off', // disallow unmodified conditions of loops
		'no-unused-expressions': ['off'], // disallow usage of expressions in statement position
		'no-unused-labels': 'error', // disallow unused labels
		'no-useless-call': 'off', // disallow unnecessary .call() and .apply()
		'no-useless-catch': 'error', // disallow unnecessary catch clauses
		'no-useless-concat': 'error', // disallow useless string concatenation
		'no-useless-escape': 'error', // disallow unnecessary string escaping
		'no-useless-return': 'off', // disallow redundant return; keywords
		'no-void': 'error', // disallow use of void operator
		'no-warning-comments': [
			'warn',
			{
				// disallow usage of warning terms in comments: e.g. todo
				terms: ['todo', 'fixme', 'xxx'],
				location: 'start',
			},
		],
		'no-with': 'error', // disallow use of the with statement
		'prefer-named-capture-group': 'off', // Suggest using named capture group in regular expression
		'prefer-promise-reject-errors': [
			'error',
			{
				// require using Error objects as Promise rejection reasons
				allowEmptyReject: true,
			},
		],
		'prefer-regex-literals': 'off', // disallow use of the RegExp constructor
		radix: 'error', // require use of the second argument for parseInt()
		'require-await': 'off', // require `await` in `async function`
		'require-unicode-regexp': 'off', // Enforce the use of u flag on RegExp
		'vars-on-top': 'error', // requires to declare all vars on top of their containing scope
		'wrap-iife': [
			'error',
			'outside',
			{
				// require immediate function invocation to be wrapped in parentheses
				functionPrototypeMethods: false,
			},
		],
		yoda: 'error', // require or disallow Yoda conditions

		/* Strict Mode - Can add these via babel or webpack */
		strict: ['error', 'never'], // require or disallow strict mode

		/* Variables */
		'init-declarations': 'off', // enforce or disallow variable initializations at definition
		'no-delete-var': 'error', // disallow deletion of variables
		'no-label-var': 'error', // disallow labels that share a name with a variable
		'no-restricted-globals': ['off'], // disallow specific globals
		'no-shadow': 'error', // disallow declaration of variables already declared in the outer scope
		'no-shadow-restricted-names': 'error', // disallow shadowing of names such as arguments
		'no-undef': 'error', // disallow use of undeclared variables unless mentioned in a /*global */ block
		'no-undef-init': 'error', // disallow use of undefined when initializing variables
		'no-undefined': 'off', // disallow use of undefined variable
		'no-unused-vars': [
			'warn',
			{
				// disallow declaration of variables that are not used in the code
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true,
			},
		],
		'no-use-before-define': [
			'error',
			{
				// disallow use of variables before they are defined
				functions: true,
				classes: true,
				variables: true,
			},
		],

		/* Stylistic issues */
		// enforce line breaks after opening and before closing array brackets
		'array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }
		'array-bracket-spacing': ['error', 'never'], // enforce spacing inside array brackets
		'array-element-newline': [
			'off',
			{
				// enforce line breaks between array elements
				multiline: true,
				minItems: 3,
			},
		],
		'block-spacing': ['error', 'always'], // enforce spacing inside single-line blocks
		'brace-style': [
			'error',
			'1tbs',
			{
				// enforce one true brace style
				allowSingleLine: true,
			},
		],
		camelcase: [
			'error',
			{
				// require camel case names
				properties: 'never',
				ignoreDestructuring: false,
			},
		],
		'capitalized-comments': [
			'off',
			'never',
			{
				// enforce or disallow capitalization of the first letter of a comment
				line: {
					ignorePattern: '.*',
					ignoreInlineComments: true,
					ignoreConsecutiveComments: true,
				},
				block: {
					ignorePattern: '.*',
					ignoreInlineComments: true,
					ignoreConsecutiveComments: true,
				},
			},
		],
		'comma-dangle': [
			'error',
			{
				// require trailing commas in multiline object literals
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'always-multiline',
			},
		],
		'comma-spacing': [
			'error',
			{
				// enforce spacing before and after comma
				before: false,
				after: true,
			},
		],
		'comma-style': [
			'error',
			'last',
			{
				// enforce one true comma style
				exceptions: {
					ArrayExpression: false,
					ArrayPattern: false,
					ArrowFunctionExpression: false,
					CallExpression: false,
					FunctionDeclaration: false,
					FunctionExpression: false,
					ImportDeclaration: false,
					ObjectExpression: false,
					ObjectPattern: false,
					VariableDeclaration: false,
					NewExpression: false,
				},
			},
		],
		'computed-property-spacing': ['error', 'never'], // disallow padding inside computed properties
		'consistent-this': 'off', // enforces consistent naming when capturing the current execution context
		'eol-last': ['error', 'always'], // enforce newline at the end of file, with no multiple empty lines
		'func-call-spacing': ['error', 'never'], // enforce spacing between functions and their invocations
		'func-name-matching': [
			'off',
			'always',
			{
				// requires function names to match the name of the variable or property assigned
				includeCommonJSModuleExports: false,
				considerPropertyDescriptor: true,
			},
		],
		'func-names': 'off', // require function expressions to have a name
		'func-style': ['off', 'expression'], // enforces use of function declarations or expressions
		'function-call-argument-newline': ['off', 'consistent'], // enforce line breaks between arguments of a function
		'function-paren-newline': ['error', 'consistent'], // enforce consistent line breaks inside function parentheses
		'id-blacklist': 'off', // blacklist certain identifiers to prevent them being used
		'id-length': 'off', // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
		'id-match': 'off', // require identifiers to match the provided regular expression
		'implicit-arrow-linebreak': ['error', 'beside'], // Enforce the location of arrow function bodies with implicit returns
		indent: [
			'error',
			2,
			{
				// this option sets a specific tab width for your code
				SwitchCase: 1,
				VariableDeclarator: 1,
				outerIIFEBody: 1,
				// MemberExpression: null,
				FunctionDeclaration: {
					parameters: 1,
					body: 1,
				},
				FunctionExpression: {
					parameters: 1,
					body: 1,
				},
				CallExpression: {
					arguments: 1,
				},
				ArrayExpression: 1,
				ObjectExpression: 1,
				ImportDeclaration: 1,
				flatTernaryExpressions: false,
				ignoredNodes: [
					'JSXElement',
					'JSXElement > *',
					'JSXAttribute',
					'JSXIdentifier',
					'JSXNamespacedName',
					'JSXMemberExpression',
					'JSXSpreadAttribute',
					'JSXExpressionContainer',
					'JSXOpeningElement',
					'JSXClosingElement',
					'JSXFragment',
					'JSXOpeningFragment',
					'JSXClosingFragment',
					'JSXText',
					'JSXEmptyExpression',
					'JSXSpreadChild',
				],
				ignoreComments: false,
			},
		],
		'jsx-quotes': ['off', 'prefer-double'], // specify whether double or single quotes should be used in JSX attributes
		'key-spacing': [
			'error',
			{
				// enforces spacing between keys and values in object literal properties
				beforeColon: false,
				afterColon: true,
			},
		],
		'keyword-spacing': [
			'error',
			{
				// require a space before & after certain keywords
				before: true,
				after: true,
				overrides: {
					return: {
						after: true,
					},
					throw: {
						after: true,
					},
					case: {
						after: true,
					},
				},
			},
		],
		'line-comment-position': [
			'off',
			{
				// enforce position of line comments
				position: 'above',
				ignorePattern: '',
				applyDefaultPatterns: true,
			},
		],
		'linebreak-style': ['error', 'unix'], // disallow mixed 'LF' and 'CRLF' as linebreaks
		'lines-around-comment': 'off', // enforces empty lines around comments
		'lines-between-class-members': [
			'error',
			'always',
			{
				// require or disallow an empty line between class members
				exceptAfterSingleLine: false,
			},
		],
		'max-depth': ['off', 4], // specify the maximum depth that blocks can be nested
		'max-len': [
			'error',
			100,
			2,
			{
				// specify the maximum length of a line in your program
				ignoreUrls: true,
				ignoreComments: false,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			},
		],
		'max-lines': [
			'off',
			{
				// specify the max number of lines in a file
				max: 300,
				skipBlankLines: true,
				skipComments: true,
			},
		],
		'max-lines-per-function': [
			'off',
			{
				// enforce a maximum function length
				max: 50,
				skipBlankLines: true,
				skipComments: true,
				IIFEs: true,
			},
		],
		'max-nested-callbacks': 'off', // specify the maximum depth callbacks can be nested
		'max-params': ['off', 3], // limits the number of parameters that can be used in the function declaration.
		'max-statements': ['off', 10], // specify the maximum number of statement allowed in a function
		'max-statements-per-line': [
			'off',
			{
				max: 1,
			},
		], // restrict the number of statements per line
		'multiline-comment-style': ['off', 'starred-block'], // enforce a particular style for multiline comments
		'multiline-ternary': ['off', 'never'], // require multiline ternary
		'new-cap': [
			'error',
			{
				// require a capital letter for constructors
				newIsCap: true,
				newIsCapExceptions: [],
				capIsNew: false,
				capIsNewExceptions: [
					'Immutable.Map',
					'Immutable.Set',
					'Immutable.List',
				],
			},
		],
		'new-parens': 'error', // disallow the omission of parentheses when invoking a constructor with no arguments
		'newline-per-chained-call': [
			'error',
			{
				// enforces new line after each method call in the chain
				ignoreChainWithDepth: 4,
			},
		],
		'no-array-constructor': 'error', // disallow use of the Array constructor
		'no-bitwise': 'error', // disallow use of bitwise operators
		'no-continue': 'error', // disallow use of the continue statement
		'no-inline-comments': 'off', // disallow comments inline after code
		'no-lonely-if': 'error', // disallow if as the only statement in an else block
		'no-mixed-operators': ['off'], // disallow un-paren'd mixes of different operators
		'no-mixed-spaces-and-tabs': 'error', // disallow mixed spaces and tabs for indentation
		'no-multi-assign': ['error'], // disallow use of chained assignment expressions
		'no-multiple-empty-lines': [
			'error',
			{
				// disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
				max: 2,
				maxBOF: 0,
				maxEOF: 0,
			},
		],
		'no-negated-condition': 'off', // disallow negated conditions
		'no-nested-ternary': 'error', // disallow nested ternary expressions
		'no-new-object': 'error', // disallow use of the Object constructor
		'no-plusplus': 'off', // disallow use of unary operators, ++ and --
		'no-restricted-syntax': ['off'], // disallow certain syntax forms
		'no-tabs': 'error', // disallow tab characters entirely
		'no-ternary': 'off', // disallow the use of ternary operators
		'no-trailing-spaces': [
			'error',
			{
				// disallow trailing whitespace at the end of lines
				skipBlankLines: false,
				ignoreComments: false,
			},
		],
		'no-underscore-dangle': [
			'error',
			{
				// disallow dangling underscores in identifiers
				allow: [],
				allowAfterThis: false,
				allowAfterSuper: false,
				enforceInMethodNames: true,
			},
		],
		'no-unneeded-ternary': ['off'], // disallow the use of Boolean literals in conditional expressions
		'no-whitespace-before-property': 'error', // disallow whitespace before properties
		'nonblock-statement-body-position': ['off'], // enforce the location of single-line statements
		'object-curly-spacing': ['error', 'always'], // require padding inside curly braces
		'object-curly-newline': [
			'error',
			{
				// enforce line breaks between braces
				ObjectExpression: {
					minProperties: 4,
					multiline: true,
					consistent: true,
				},
				ObjectPattern: {
					minProperties: 4,
					multiline: true,
					consistent: true,
				},
				ImportDeclaration: {
					minProperties: 4,
					multiline: true,
					consistent: true,
				},
				ExportDeclaration: {
					minProperties: 4,
					multiline: true,
					consistent: true,
				},
			},
		],
		'object-property-newline': [
			'error',
			{
				// enforce "same line" or "multiple line" on object properties.
				allowAllPropertiesOnSameLine: true,
			},
		],
		'one-var': ['error', 'never'], // allow just one var statement per function
		'one-var-declaration-per-line': ['error', 'always'], // require a newline around variable declaration
		'operator-assignment': ['off', 'always'], // require assignment operator shorthand where possible or prohibit it entirely
		'operator-linebreak': [
			'error',
			'before',
			{
				// Requires operator at the beginning of the line in multiline statements
				overrides: {
					'=': 'none',
				},
			},
		],
		'padded-blocks': [
			'error',
			{
				// disallow padding within blocks
				blocks: 'never',
				classes: 'never',
				switches: 'never',
			},
			{
				allowSingleLineBlocks: true,
			},
		],
		'padding-line-between-statements': 'off', // Require or disallow padding lines between statements
		'prefer-exponentiation-operator': 'off', // Disallow the use of Math.pow in favor of the ** operator
		'prefer-object-spread': 'error', // Prefer use of an object spread over Object.assign
		'quote-props': [
			'error',
			'as-needed',
			{
				// require quotes around object literal property names
				keywords: false,
				unnecessary: true,
				numbers: false,
			},
		],
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true,
			},
		], // specify whether double or single quotes should be used
		semi: ['error', 'always'], // require or disallow use of semicolons instead of ASI
		'semi-spacing': [
			'error',
			{
				// enforce spacing before and after semicolons
				before: false,
				after: true,
			},
		],
		'semi-style': ['error', 'last'], // Enforce location of semicolons
		'sort-keys': [
			'off',
			'asc',
			{
				// requires object keys to be sorted
				caseSensitive: false,
				natural: true,
			},
		],
		'sort-vars': 'off', // sort variables within the same declaration block
		'space-before-blocks': 'error', // require or disallow space before blocks
		'space-before-function-paren': [
			'error',
			{
				// require or disallow space before function opening parenthesis
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'space-in-parens': ['error', 'never'], // require or disallow spaces inside parentheses
		'space-infix-ops': 'error', // require spaces around operators
		'space-unary-ops': [
			'error',
			{
				// Require or disallow spaces before/after unary operators
				words: true,
				nonwords: false,
				overrides: {},
			},
		],
		'spaced-comment': ['error', 'always'], // require or disallow a space immediately following the // or /* in a comment
		'switch-colon-spacing': [
			'error',
			{
				// Enforce spacing around colons of switch statements
				after: true,
				before: false,
			},
		],
		'template-tag-spacing': ['error', 'never'], // Require or disallow spacing between template tags and their literals
		'unicode-bom': ['error', 'never'], // require or disallow the Unicode Byte Order Mark
		'wrap-regex': 'off', // require regex literals to be wrapped in parentheses

		/* es6 - ES2015 */
		'arrow-body-style': [
			'error',
			'as-needed',
			{
				// enforces no braces where they can be omitted
				requireReturnForObjectLiteral: false,
			},
		],
		'arrow-parens': ['error', 'always'], // require parens in arrow function arguments
		'arrow-spacing': [
			'error',
			{
				// require space before/after arrow function's arrow
				before: true,
				after: true,
			},
		],
		'constructor-super': 'error', // verify super() callings in constructors
		'generator-star-spacing': [
			'off',
			{
				// enforce the spacing around the * in generator functions
				before: false,
				after: true,
			},
		],
		'no-class-assign': 'error', // disallow modifying variables of class declarations
		'no-confusing-arrow': [
			'error',
			{
				// disallow arrow functions where they could be confused with comparisons
				allowParens: true,
			},
		],
		'no-const-assign': 'error', // disallow modifying variables that are declared using const
		'no-dupe-class-members': 'error', // disallow duplicate class members
		'no-duplicate-imports': 'error', // disallow importing from the same path more than once
		'no-new-symbol': 'error', // disallow symbol constructor
		'no-restricted-imports': [
			'off',
			{
				// disallow specific imports
				paths: [],
				patterns: [],
			},
		],
		'no-this-before-super': 'error', // disallow to use this/super before super() calling in constructors.
		'no-useless-computed-key': 'error', // disallow useless computed property keys
		'no-useless-constructor': 'off', // disallow unnecessary constructor
		'no-useless-rename': [
			'error',
			{
				// disallow renaming import, export, and destructured assignments to the same name
				ignoreDestructuring: false,
				ignoreImport: false,
				ignoreExport: false,
			},
		],
		'no-var': 'error', // require let or const instead of var
		'object-shorthand': [
			'error',
			'always',
			{
				// require method and property shorthand syntax for object literals
				ignoreConstructors: false,
				avoidQuotes: true,
			},
		],
		'prefer-arrow-callback': [
			'error',
			{
				// suggest using arrow functions as callbacks
				allowNamedFunctions: false,
				allowUnboundThis: true,
			},
		],
		'prefer-const': [
			'error',
			{
				// suggest using of const declaration for variables that are never modified after declared
				destructuring: 'any',
				ignoreReadBeforeAssign: true,
			},
		],
		'prefer-destructuring': [
			'error',
			{
				// Prefer destructuring from arrays and objects
				VariableDeclarator: {
					array: false,
					object: true,
				},
				AssignmentExpression: {
					array: true,
					object: false,
				},
			},
			{
				enforceForRenamedProperties: false,
			},
		],
		'prefer-numeric-literals': 'off', // disallow parseInt() in favor of binary, octal, and hexadecimal literals
		'prefer-rest-params': 'error', // use rest parameters instead of arguments
		'prefer-spread': 'error', // suggest using the spread operator instead of .apply()
		'prefer-template': 'error', // suggest using template literals instead of string concatenation
		'require-yield': 'error', // disallow generator functions that do not have yield
		'rest-spread-spacing': ['error', 'never'], // enforce spacing between object rest-spread
		'sort-imports': [
			'off',
			{
				// import sorting
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
		'symbol-description': 'error', // require a Symbol description
		'template-curly-spacing': 'error', // enforce usage of spacing in template strings
		'yield-star-spacing': ['error', 'after'], // enforce spacing around the * in yield* expressions
	},
};
