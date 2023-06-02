module.exports = {
    env: { browser: true, es2020: true },
    extends:[
        'react-app',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:testing-library/react',
        'plugin:testing-library/dom',
        'plugin:jest-dom/recommended',
        'plugin:react/jsx-runtime',
        'prettier'
    ],
    ignorePatterns: ['dist/*'],
    settings:{
        next:{
            rootDir: ["app/*/", "packages/*/"]
        }
    },
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        "react/jsx-key": "off"
    }
}
