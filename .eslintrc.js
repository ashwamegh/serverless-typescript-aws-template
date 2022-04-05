module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
	env: {
		node: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {},
		},
	},
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: './',
		sourceType: 'module',
		ecmaVersion: 2019,
	},
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
	},
};
