module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      sans: ["Futura", "Inter var", "system-ui", "sans-serif"],
    },
    extend: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      space: {
        lighter: '#119da4',
        light: '#19647e',
        DEFAULT: '#4B3F72',
        dark: '#1F2041',
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
      white: '#fff',
      stellar: '#ffc857',
      stellarDark: 'B27800',
      spaceLight: '#119da4'
    },
    backgroundImage: {
      main: 'background: linear-gradient(180deg, rgba(19,19,19,1) 0%, rgba(75,63,114,1) 30%, rgba(31,32,65,1) 66%);',
    }
  }
},
  variants: {
    opacity: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "last"],
  },
}
