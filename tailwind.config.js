module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/**/*.html', './src/**/*.js', './src/**/*.css'],
  },
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Besley', 'serif'],
      body: ['Lato', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
