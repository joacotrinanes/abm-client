module.exports = {
    root: true,
    extends: ['@react-native-community'],
    env: {
        'jest/globals': true
    },
    rules: {
        quotes: ['error', 'single'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 0,
        'prettier/prettier': [
            'error',
            {
                singleQuote: true
            },
            {
                endOfLine: 'auto'
            }
        ],
        'comma-dangle': ['error', 'never']
    }
};