/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        base: {
          white: '#ffffff',
          black: '#000000'
        },
        text: {
          light: {
            muted: '#9ca3af',
            default: '#d1d5db',
            strong: '#f9fafb'
          },
          dark: {
            strong: '#111928',
            default: '#6b7280',
            muted: '#9ca3af'
          },
          action: {
            primary: '#76a9fa',
            error: '#f05252',
            success: '#31c48d',
            caution: '#e3a008'
          }
        },
        border: {
          default: {
            muted: {
              default: '#374151',
              alpha: '#aacafd'
            },
            default: {
              default: '#4b5563',
              alpha: '#c3dbfe'
            },
            strong: {
              default: '#6b7280',
              alpha: '#d0defb'
            }
          },
          action: {
            primary: '#1c64f2',
            error: '#f05252'
          }
        },
        background: {
          dark: {
            muted: {
              alpha: '#6b9dfa',
              default: '#111928'
            },
            default: {
              default: '#1f2a37',
              alpha: '#8ec1fa'
            },
            strong: {
              default: '#374151',
              alpha: '#aacafd'
            },
            elevated: {
              default: '#4b5563',
              alpha: '#c3dbfe'
            }
          },
          light: {
            default: {
              default: '#f9fafb',
              alpha: '#37597b'
            },
            muted: {
              default: '#d1d5db',
              alpha: '#0d2344'
            },
            faded: {
              default: '#9ca3af',
              alpha: '#011332'
            }
          },
          overlay: {
            default: '#020e22'
          },
          action: {
            primary: {
              muted: '#1e429f',
              default: '#1a56db',
              strong: '#1c64f2',
              light: '#e1effe'
            },
            caution: {
              muted: '#723b13',
              default: '#8e4b10',
              strong: '#9f580a',
              light: '#fdf6b2'
            },
            success: {
              muted: '#03543f',
              default: '#046c4e',
              strong: '#057a55',
              light: '#def7ec'
            },
            error: {
              muted: '#9b1c1c',
              default: '#c81e1e',
              strong: '#e02424',
              light: '#fde8e8'
            }
          }
        },
        core: {
          neutral: {
            default: {
              50: '#f9fafb',
              100: '#f3f4f6',
              200: '#e5e7eb',
              300: '#d1d5db',
              400: '#9ca3af',
              500: '#6b7280',
              600: '#4b5563',
              700: '#374151',
              800: '#1f2a37',
              900: '#111928'
            },
            lighten: {
              50: '#fbfcfe',
              100: '#fbfcfe',
              200: '#f7f8fd',
              300: '#f5f9ff',
              400: '#e1ebfe',
              500: '#d0defb',
              600: '#c3dbfe',
              700: '#aacafd',
              800: '#8ec1fa',
              900: '#6b9dfa'
            },
            darken: {
              50: '#37597b',
              100: '#0f244d',
              200: '#132549',
              300: '#0d2344',
              400: '#011332',
              500: '#04112a',
              600: '#011023',
              700: '#020e22',
              800: '#000e1f',
              900: '#020b1c'
            }
          },
          blue: {
            50: '#ebf5ff',
            100: '#e1effe',
            200: '#c3ddfd',
            300: '#a4cafe',
            400: '#76a9fa',
            500: '#3f83f8',
            600: '#1c64f2',
            700: '#1a56db',
            800: '#1e429f',
            900: '#233876'
          },
          red: {
            50: '#fdf2f2',
            100: '#fde8e8',
            200: '#fbd5d5',
            300: '#f8b4b4',
            400: '#f98080',
            500: '#f05252',
            600: '#e02424',
            700: '#c81e1e',
            800: '#9b1c1c',
            900: '#771d1d'
          },
          green: {
            50: '#f3faf7',
            100: '#def7ec',
            200: '#bcf0da',
            300: '#84e1bc',
            400: '#31c48d',
            500: '#0e9f6e',
            600: '#057a55',
            700: '#046c4e',
            800: '#03543f',
            900: '#014737'
          },
          yellow: {
            50: '#fdfdea',
            100: '#fdf6b2',
            200: '#fce96a',
            300: '#faca15',
            400: '#e3a008',
            500: '#c27803',
            600: '#9f580a',
            700: '#8e4b10',
            800: '#723b13',
            900: '#633112'
          }
        },
        social: {
          facebook: '#35518d',
          twitter: '#1da1f2',
          google: '#4284f4',
          dribbble: '#ea4c89',
          github: '#1b1f23'
        }
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide'),
  ],
  darkMode: 'class'
};
