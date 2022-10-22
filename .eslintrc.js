module.exports = {
  extends: ['airbnb'],
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
    'comma-dangle': ['error', 'never'],
    'quote-props': [1, 'as-needed']
  }
};
