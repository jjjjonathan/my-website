module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/**/*.html', './src/**/*.js', './src/**/*.css'],
  },
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Besley'],
      body: ['Lato'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
