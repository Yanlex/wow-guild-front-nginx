module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		node: true,
		browser: true,
		es2020: true,
	},
	plugins: ['react', 'react-hooks', 'import', 'jsx-a11y', '@typescript-eslint', 'prettier'],
	extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'prettier'],
	rules: {
		'react/no-unescaped-entities': 'off',
		camelcase: 'off',
		'prefer-destructuring': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'prettier/prettier': ['error'],
		'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
		'import/extensions': [
			'error',
			{
				tsx: 'never',
				jsx: 'never',
			},
		],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'import/no-unresolved': 'error',
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

				// Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

				// use <root>/path/to/folder/tsconfig.json
				project: 'path/to/folder',

				// Multiple tsconfigs (Useful for monorepos)
			},
		},
	},
};
