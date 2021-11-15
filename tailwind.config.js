module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  mode: 'jit',
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "4rem",
    },
    fontFamily: {
      sans: ["Futura", "Inter var", "system-ui", "sans-serif"],
    },
    extend: {
    fontSize: {
        xs: ['0.75rem', '1rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.75rem'],
        lg: ['1.125rem', '2rem'],
        xl: ['1.25rem', '2.25rem'],
        '2xl': ['1.5rem','2.35rem'],
        '3xl': ['1.875rem','2.5rem'],
        '4xl': ['2.25rem','3rem'],
        '5xl': ['3rem','4rem'],
        '6xl': ['3.75rem','4.5rem'],
        '7xl': ['4.5rem','5.25rem'],
      },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      space: {
        lighter: '#119da4',
        light: '#19647e',
        DEFAULT: '#4B3F72',
        dark: '#1F2041',
        darker: '#121229',
        darkest: '#131313',
      },
      white: {
        white: '#fff',
        whitey: '#eee',
        whiteyDarker: '#E0E0E0',
      },
      stellar: {
        light: '#ffc857',
        dark: '#B27800',
      },
    },
    textColor: {
      whitey: '#eee',
      whiteyDarker: '#E0E0E0',
      white: '#fff',
      stellar: '#ffc857',
      stellarDarker: '#D9AF59',
      stellarDark: '#B27800',
      spaceLight: '#119da4',
      spaceDarker: '#121229',
      spaceDarkest: '#131313',
    }
  }
},
  variants: {
    opacity: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "last"],
  },
}
