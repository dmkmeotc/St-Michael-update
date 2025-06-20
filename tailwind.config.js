/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./src/**/*.{tsx,css}'],
  theme: {
  	fontFamily: {
  		sans: [
  			'Inter',
  			'sans-serif'
  		],
  		mono: [
  			'Monaco',
  			'ui-monospace',
  			'SFMono-Regular',
  			'Menlo',
  			'Consolas',
  			'Liberation Mono',
  			'Courier New',
  			'monospace'
  		]
  	},
  	container: {
  		center: true,
  		screens: {
  			sm: '50rem'
  		}
  	},
  	extend: {
  		colors: {
  			slate: {
  				'850': 'hsl(222deg 47% 16%)'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
			  ethLightBlue: {
          50: "#E0F5FF",
          100: "#C2EBFF",
          200: "#8AD8FF",
          300: "#4DC3FF",
          400: "#0FAFFF",
          500: "#008FD5",
          600: "#0070A8",
          700: "#005580",
          800: "#003A57",
          900: "#001B29",
          950: "#000E14"
        },
        ethDeepBlue: {
          50: "#E0F3FF",
          100: "#BDE4FF",
          200: "#80CCFF",
          300: "#3DB1FF",
          400: "#0099FF",
          500: "#0072BC",
          600: "#005C99",
          700: "#004370",
          800: "#002E4D",
          900: "#001524",
          950: "#000C14"
        },
        ethRed: {
          50: "#FDE7E8",
          100: "#FBD0D1",
          200: "#F8A5A8",
          300: "#F4767A",
          400: "#F14B51",
          500: "#ED1C24",
          600: "#C61016",
          700: "#920C10",
          800: "#63080B",
          900: "#2F0405",
          950: "#180203"
        },
        ethGray: {
          50: "#FCFCFC",
          100: "#FCFCFC",
          200: "#F7F7F7",
          300: "#F5F5F5",
          400: "#F2F2F2",
          500: "#EEEEEE",
          600: "#BFBFBF",
          700: "#8F8F8F",
          800: "#5E5E5E",
          900: "#303030",
          950: "#171717"
        },
        ethLime: {
          50: "#F3F9EB",
          100: "#E8F3D8",
          200: "#D1E8B0",
          300: "#BCDD8D",
          400: "#A5D166",
          500: "#8DC63F",
          600: "#72A130",
          700: "#567A24",
          800: "#384F17",
          900: "#1C270C",
          950: "#0E1406"
        },
        ethGreen: {
          50: "#DBFFEB",
          100: "#BDFFDB",
          200: "#75FFB3",
          300: "#33FF8F",
          400: "#00F06C",
          500: "#00AB4E",
          600: "#008A3E",
          700: "#00662E",
          800: "#00421E",
          900: "#002410",
          950: "#000F07"
        },
        ethYellow: {
          50: "#FFF9E5",
          100: "#FFF4D1",
          200: "#FFE79E",
          300: "#FFDB70",
          400: "#FFCF3D",
          500: "#FFC20E",
          600: "#D6A100",
          700: "#A37A00",
          800: "#6B5000",
          900: "#382A00",
          950: "#191300"
        },
        ethBlack:  {
          50: "#EBEBEB",
          100: "#D6D6D6",
          200: "#ADADAD",
          300: "#858585",
          400: "#5C5C5C",
          500: "#333333",
          600: "#292929",
          700: "#1F1F1F",
          800: "#141414",
          900: "#0A0A0A",
          950: "#050505"
        }
			,
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
};
