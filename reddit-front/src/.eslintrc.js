module.exports = {
  extends: ['airbnb'],
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
    'comma-dangle': ['error', 'never'],
    'quote-props': [1, 'as-needed'],
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-param-reassign': 0,
    'linebreak-style': 0
  }
};
