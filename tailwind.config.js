/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.tsx',
    // Add more patterns if needed
  ],
  theme: {
    fontSize: {
      //text-{}
      xxs: [".688rem", "1.4"], // 11px
      xs: [".75rem", "1.4"], // 12px
      ss: [".8125rem", "1.4"], // 13px
      sm: [".875rem", "1.5"], // 14px
      base: ["1rem", "1.5"], //16px
      bp: ["1rem", "1.6"], // 16px
      lg: ["1.125rem", "1.5"], // 18px
      xl: ["1.25rem", "1.3"], // 20px
      "2xl": ["1.5rem", "1.2"], // 24px
      "3xl": ["1.75rem", "1.3"], // 28px
      "4xl": ["1.875rem", "1.2"], // 30px
      "5xl": ["2.25rem", "1.2"], // 36px
      "6xl": ["2.625rem", "1.2"], //42px
      "7xl": ["3rem", "1.2"], //48px
      "7.5xl": ["3.5", "1.2"], //56px 
      "8xl": ["5rem", "1"], //80px
    },
    extend: {
      spacing: {
        1.25: "0.3125rem", // 5px
        3.75: "0.9375rem", // 15px
        4.5: "1.125rem", // 18px
        6.25: "1.5625rem", // 25px
        7.5: "1.875rem", // 30px
        8.75: "2.1875rem", // 35px
        9.1: "2.3125rem", //37px
        11.25: "2.8125rem", // 45px
        12.5: "3.125rem", // 50px
        12.75: "3.4375rem", // 55px
        15: "3.75rem", // 60px
        15.5: "4.0625rem", // 65px
        17.5: "4.375rem", // 70px
        17.02: "4.5rem", // 72px
        25: "6.25rem", // 100px
        37.5: "9.375rem", // 150px
        50: "12.5rem", // 200px
      },
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
      width: {
        '4.5': '1.125rem', //18px
        '7.5': '1.875rem', // 30px
        '13': '3.125rem', //50px
        '15': '3.75rem', //60px
        '16.5': '4.063rem', //65px
        '25': "6.25rem", //100px
      },
      height: {
        '4.5': '1.125rem', //18px
        '7.5': '1.875rem', // 30px
        '13': '3.125rem', //50px
        '15': '3.75rem', //60px
        '16.5': '4.063rem', //65px
        '25': "6.25rem", //100px
      },
      lineHeight: {
        '4.5': '1.125rem',
      },
      colors: {
        primary: {
          DEFAULT: "#000000",
        },
        secondary: "#FFFFFF",
        transparent: "transparent",
        current: "currentColor",
        BodyTextColor: "#444444",
        pink: {
          light: "#F27A8C",
          DEFAULT: "#EE3A55",
          dark: "#BA2C41",
        },
        gray: {
          lightGrayBg: "#F7F7F7",
          Grey: "#C7C7C7",
          DEFAULT: "#C0C0C0",
          dark: "#696969",
          BorderGrey: "#E8E8E8",
          GreyText: "#7C7C7C",
          Blacktext: "#333333",
          inputfieldGray: "#AFAFAF",
          inputfieldBorder: "#D0D0D0",
          iconcolor: "#aaaaaa",
          backgroundgrey: "#E5E5E5",
          Grayborder: "#F2F2F2",
          Bordergray: "#DBDBDB"
        },
        black: {
          DEFAULT: "#000000",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        green: {
          light: "#B4C78D",
          pear: "#8AAB53",
          DEFAULT: "#64DB9E",
        },
        red: {
          DEFAULT: "#F34E4E",
        },
        orange: {
          DEFAULT: "#F2765B",
        },
        blue: {
          light: "#97C7E1",
          DEFAULT: "#5BAAF2",
        },
        purple: {
          DEFAULT: "#B78BD2",
        },
        yellow: {
          DEFAULT: "#F2BF5B",
        },
        fuscia: {
          DEFAULT: "#D75B96",
        },
        brown: {
          DEFAULT: "#AD9995",
        },
        heather: {
          DEFAULT: "#7F8399",
        },
        turquoise: {
          DEFAULT: "#52B8B2",
        },
        honey: {
          DEFAULT: "#DB9B3C",
        },
      },
      fontFamily: {
        proxima: ['proxima-nova', ' sans-serif'],
        Avenire: ['Avenir Next LT Pro', 'sans-serif'],
        Aveniresemi: ['Avenir Next Demi', 'sans-serif']
      },
      lineHeight: {
        none: 1,
        tight: 1.2,
        snug: 1.3,
        normal: 1.4,
        relaxed: 1.5,
        loose: 1.6,
      },
      borderRadius: {
        xs: "2px",
        sm: "3px",
        DEFAULT: "4px",
        lg: "10px",
      },
      letterSpacing: {
        slight: "0.0125em",
      },
      boxShadow: {
        primary: "0px 4px 5px rgba(238, 58, 85, 0.5)",
        light: "0 5px 10px -3px rgba(0, 0, 0, 0.075)",
      },

      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0)'
          },
          '50%': {
            opacity: '0.5',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-out-down': {
          'from': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          'to': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-out-up': {
          'from': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          'to': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
        }
      },
      animation: {
        'fade-in': 'fade-in all 0.5s ease',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out'
      }

    },


  },
  plugins: [],
}

