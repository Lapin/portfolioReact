module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'darkish': "#282c34",
      },
      fontFamily: {
        'Inter': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'large': '1.25rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
