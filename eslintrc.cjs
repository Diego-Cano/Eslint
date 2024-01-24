module.exports = {
    
    extends: ['semistandard'],

    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        // Semicolon usage
        semi: ['error', 'always'], // Enforce semicolons

        // Quotation marks
        quotes: ['error', 'single'], // Enforce single quotes
    
    }
}
