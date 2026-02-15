import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    50: '#eefcff',
    100: '#d6f6ff',
    200: '#a8e9ff',
    300: '#76dcff',
    400: '#45cfff',
    500: '#1fb6e6',
    600: '#118fb5',
    700: '#0d6c87',
    800: '#0b4a5a',
    900: '#072a33',
  },
}

const fonts = {
  heading: "'Poppins', sans-serif",
  body: "'Inter', sans-serif",
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles = {
  global: {
    body: {
      bg: 'gray.900',
      color: 'gray.100',
    },
  },
}

export default extendTheme({ colors, fonts, config, styles })
