module.exports = {
	extends: ['airbnb-base', 'prettier'],
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
		jquery: true,
		jest: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
		'no-unused-vars': 'warn',
		'no-console': 'warn',
		'func-names': 'off',
	},
};
