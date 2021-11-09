module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
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
      typography: {
        DEFAULT: {
          css: {
            color: '#E0E0E0',
            h1: {
              color: '#E0E0E0',
            },
            h2: {
              color: '#ffc857',
              fontWeight: 500,
            },
            h3: {
              color: '#E0E0E0',
              fontWeight: 500,
            },
            blockquote: {
              color: '#E0E0E0',
              borderLeftColor: '#ffc857',
            },
            a: {
              textDecoration: 'none',
            },
          },
        },
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
      white: '#fff',
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
plugins: [
  require('@tailwindcss/typography')
],
  variants: {
    opacity: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "last"],
  },
}
