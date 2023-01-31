/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["../src/**/*.{js,ts,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      general: {
        background: {
          primary: {
            static: "#f9fafb",
            hover: "#f3f4f6",
            active: "#e5e7eb"
          }
        },
        overlay: {
          primary: "#000000cc",
          secondary: "#00000099",
          tetriary: "#00000066"
        },
        text: {
          primary: "#111827",
          secondary: "#374151",
          tetriary: "#9ca3af",
          warning: "#ffa1a7"
        },
        icon: {
          primary: "#111827",
          secondary: "#374151",
          tetriary: "#9ca3af",
          warning: "#ffa1a7"
        }
      },
      button: {
        primary: {
          background: {
            static: "#d2dadb",
            hover: "#acbdbd",
            active: "#eaeeef"
          },
          border: {
            static: "#d2dadb",
            hover: "#acbdbd",
            active: "#eaeeef"
          },
          text: "#ffffff",
          icon: "#ffffff"
        },
        secondary: {
          background: {
            static: "#f9fafb",
            hover: "#f3f4f6",
            active: "#f3f4f6"
          },
          border: {
            static: "#d2dadb",
            hover: "#acbdbd",
            active: "#eaeeef"
          },
          text: {
            static: "#d2dadb"
          },
          icon: {
            static: "#d2dadb"
          }
        }
      },
      link: {
        text: {
          static: "#d2dadb",
          hover: "#acbdbd",
          active: "#eaeeef"
        },
        icon: {
          static: "#d2dadb",
          hover: "#acbdbd",
          active: "#eaeeef"
        }
      },
      spacing: {
        scale: 2,
        xs: 4,
        sm: 8,
        md: 16,
        lg: 32,
        xl: 64
      },
      sizing: {
        scale: 1.5,
        xs: 4,
        sm: 6,
        md: 9,
        lg: 13.5,
        xl: 20.25
      },
      borderRadius: {
        sm: 4,
        lg: 8,
        xl: 16
      },
      borderWidth: {
        none: 0,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 8
      },
      opacity: {
        low: "10%",
        md: "50%",
        high: "90%"
      },
      neutral: {
        0: "#ffffff",
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827"
      },
      black: {
        100: "#0e0e0e"
      },
      white: {
        100: "#ffffff"
      },
      fontSize: {
        0: 10,
        1: 12,
        2: 14,
        3: 16,
        4: 20,
        5: 24,
        6: 32,
        7: 40,
        8: 56,
        9: 68,
        10: 80
      },
      letterSpacing: {
        0: "0%",
        1: "0.5%"
      },
      paragraphSpacing: {
        0: 0
      },
      textCase: {
        none: "none"
      },
      textDecoration: {
        none: "none"
      },
      fontFamilies: {
        archivo: "Archivo"
      },
      lineHeights: {
        0: 120,
        1: 100,
        2: 84,
        3: 48,
        4: 60,
        5: 36,
        6: 32,
        7: 24,
        8: 20,
        9: 16
      },
      fontWeights: {
    "archivo_0": "Bold",
    "archivo_1": "SemiBold",
    "archivo_2": "Regular"
      },
      global: {
    "displayHeading_1": {
          fontFamily: "Archivo",
          fontWeight: "Bold",
          lineHeight: 120,
          fontSize: 80,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "displayHeading_2": {
          fontFamily: "Archivo",
          fontWeight: "Bold",
          lineHeight: 100,
          fontSize: 68,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "displayHeading_3": {
          fontFamily: "Archivo",
          fontWeight: "Bold",
          lineHeight: 84,
          fontSize: 56,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "heading_2": {
          fontFamily: "Archivo",
          fontWeight: "Bold",
          lineHeight: 48,
          fontSize: 32,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "heading_1": {
          fontFamily: "Archivo",
          fontWeight: "Bold",
          lineHeight: 60,
          fontSize: 40,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "heading_3": {
          fontFamily: "Archivo",
          fontWeight: "Bold",
          lineHeight: 36,
          fontSize: 24,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "titel_1": {
          fontFamily: "Archivo",
          fontWeight: "SemiBold",
          lineHeight: 100,
          fontSize: 24,
          letterSpacing: "0.5%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "titel_2": {
          fontFamily: "Archivo",
          fontWeight: "SemiBold",
          lineHeight: 100,
          fontSize: 20,
          letterSpacing: "0.5%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "titel_3": {
          fontFamily: "Archivo",
          fontWeight: "SemiBold",
          lineHeight: 100,
          fontSize: 16,
          letterSpacing: "0.5%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "caption_1": {
          fontFamily: "Archivo",
          fontWeight: "Regular",
          lineHeight: 20,
          fontSize: 12,
          letterSpacing: "0.5%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "caption_2": {
          fontFamily: "Archivo",
          fontWeight: "Regular",
          lineHeight: 16,
          fontSize: 10,
          letterSpacing: "0.5%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "subtitle_1": {
          fontFamily: "Archivo",
          fontWeight: "Regular",
          lineHeight: 32,
          fontSize: 20,
          letterSpacing: "0.5%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "subtitle_2": {
          fontFamily: "Archivo",
          fontWeight: "Regular",
          lineHeight: 24,
          fontSize: 16,
          letterSpacing: "0.5%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "subtitle_3": {
          fontFamily: "Archivo",
          fontWeight: "Regular",
          lineHeight: 20,
          fontSize: 14,
          letterSpacing: "0%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "title_1": {
          fontFamily: "Archivo",
          fontWeight: "SemiBold",
          lineHeight: 36,
          fontSize: 24,
          letterSpacing: "0.5%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "title_2": {
          fontFamily: "Archivo",
          fontWeight: "SemiBold",
          lineHeight: 32,
          fontSize: 20,
          letterSpacing: "0.5%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "title_3": {
          fontFamily: "Archivo",
          fontWeight: "SemiBold",
          lineHeight: 24,
          fontSize: 16,
          letterSpacing: "0.5%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "label_1": {
          fontFamily: "Archivo",
          fontWeight: "SemiBold",
          lineHeight: 24,
          fontSize: 16,
          letterSpacing: "0.5%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "label_2": {
          fontFamily: "Archivo",
          fontWeight: "SemiBold",
          lineHeight: 20,
          fontSize: 14,
          letterSpacing: "0.5%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        },
    "label_3": {
          fontFamily: "Archivo",
          fontWeight: "SemiBold",
          lineHeight: 20,
          fontSize: 12,
          letterSpacing: "0.5%",
          paragraphSpacing: 0,
          paragraphIndent: "0px",
          textCase: "none",
          textDecoration: "none"
        }
      },
      primaryDarkGreen: {
        50: "#f5f8f8",
        100: "#eaeeef",
        200: "#d2dadb",
        300: "#acbdbd",
        400: "#8ea6a6",
        500: "#437571",
        600: "#004e48",
        700: "#023d38",
        800: "#021f1c",
        900: "#020a0b"
      },
      secondaryGreenTheme: {
        red: {
          50: "#faf7f6",
          100: "#f5edeb",
          200: "#eededa",
          300: "#e1c6c0",
          400: "#cea49b",
          500: "#ba8579",
          600: "#a46b5e",
          700: "#88584d",
          800: "#724b42",
          900: "#61423b"
        },
        lightGreen: {
          50: "#f5f7ee",
          100: "#eaedda",
          200: "#dbe1c0",
          300: "#bcc78f",
          400: "#a2b16a",
          500: "#85964c",
          600: "#67763a",
          700: "#505b30",
          800: "#414a2a",
          900: "#394027"
        },
        blue: {
          50: "#f5f9fa",
          100: "#e9f2f5",
          200: "#c0dbe1",
          300: "#a5cdd4",
          400: "#74b2bc",
          500: "#5298a5",
          600: "#3f7c8a",
          700: "#346570",
          800: "#2e555e",
          900: "#2b484f"
        },
        purple: {
          50: "#f8f7fb",
          100: "#f1f0f7",
          200: "#e5e3f1",
          300: "#c6c0e1",
          400: "#b7aed7",
          500: "#9c8cc6",
          600: "#8972b5",
          700: "#775fa2",
          800: "#645087",
          900: "#53436f"
        },
        pink: {
          50: "#faf5f9",
          100: "#f6edf4",
          200: "#eedceb",
          300: "#e1c0db",
          400: "#cd99c2",
          500: "#bb79ac",
          600: "#a65c91",
          700: "#8d4978",
          800: "#753f64",
          900: "#633855"
        },
        green: {
          50: "#f1f8f2",
          100: "#dcefde",
          200: "#c0e1c6",
          300: "#8ec79c",
          400: "#5ea973",
          500: "#3d8c56",
          600: "#2c6f42",
          700: "#235937",
          800: "#1e472d",
          900: "#193b26"
        }
      },
      sandTheme: {
        yellow: {
          50: "#f9f7f3",
          100: "#f2ede2",
          200: "#e4d9c4",
          300: "#ceba97",
          400: "#bfa178",
          500: "#b18a5e",
          600: "#a47852",
          700: "#896245",
          800: "#6f4f3d",
          900: "#5b4233"
        },
        lime: {
          50: "#f6faf3",
          100: "#eaf4e4",
          200: "#d5e7cb",
          300: "#abce97",
          400: "#8ab771",
          500: "#699a4d",
          600: "#537e3b",
          700: "#436431",
          800: "#38502b",
          900: "#2f4225"
        },
        blue: {
          50: "#f4f6fa",
          100: "#e6ebf3",
          200: "#d2dbeb",
          300: "#b4c4dc",
          400: "#97abce",
          500: "#758abc",
          600: "#6274ae",
          700: "#57639e",
          800: "#4b5382",
          900: "#3f4669"
        },
        purple: {
          50: "#faf8fc",
          100: "#f4eff8",
          200: "#ece2f2",
          300: "#ddcae8",
          400: "#c6a8d8",
          500: "#ba97ce",
          600: "#996ab3",
          700: "#82569a",
          800: "#6e4a7f",
          900: "#593c67"
        },
        pink: {
          50: "#faf5f7",
          100: "#f6edf1",
          200: "#eedce3",
          300: "#e2bfcc",
          400: "#ce97ab",
          500: "#bc788f",
          600: "#a75b71",
          700: "#8e485a",
          800: "#763e4c",
          900: "#643742"
        },
        green: {
          50: "#f0f9f5",
          100: "#dbf0e6",
          200: "#bae0d0",
          300: "#97ceba",
          400: "#5cab91",
          500: "#3a8f76",
          600: "#29725d",
          700: "#215b4d",
          800: "#1c493d",
          900: "#183c34"
        }
      },
      rustTheme: {
        red: {
          50: "#f9f4f1",
          100: "#eedfd7",
          200: "#dbbeac",
          300: "#c89a81",
          400: "#bd8167",
          500: "#b06450",
          600: "#9b4f44",
          700: "#813d3c",
          800: "#6b3538",
          900: "#592e30"
        },
        lime: {
          50: "#f6f8ed",
          100: "#eaf0d7",
          200: "#d6e2b4",
          300: "#bacf87",
          400: "#a3bd67",
          500: "#829f43",
          600: "#657e32",
          700: "#4d612a",
          800: "#404e26",
          900: "#374324"
        },
        blue: {
          50: "#f1f7fa",
          100: "#dcebf1",
          200: "#bcd9e5",
          300: "#8ebed2",
          400: "#67a3bd",
          500: "#3e7f9c",
          600: "#366884",
          700: "#31566d",
          800: "#2f4a5b",
          900: "#2b3f4e"
        },
        purple: {
          50: "#f3f3fa",
          100: "#e8ebf7",
          200: "#d6d9ef",
          300: "#bcbfe5",
          400: "#a1a1d8",
          500: "#8e89cb",
          600: "#8176bd",
          700: "#6b5fa3",
          800: "#574f84",
          900: "#4a446b"
        },
        pink: {
          50: "#faf5f9",
          100: "#f7ecf4",
          200: "#f0daea",
          300: "#e4bdda",
          400: "#d393c1",
          500: "#bd67a3",
          600: "#ad558e",
          700: "#934374",
          800: "#7b3961",
          900: "#673452"
        },
        green: {
          50: "#effaf1",
          100: "#d9f2dd",
          200: "#b6e4c0",
          300: "#85d099",
          400: "#67bd81",
          500: "#319854",
          600: "#217a40",
          700: "#1a6235",
          800: "#174e2c",
          900: "#144025"
        }
      },
      isbreTheme: {
        red: {
          50: "#f9f7f7",
          100: "#f2eeee",
          200: "#e8e0e0",
          300: "#d7cbca",
          400: "#bfabaa",
          500: "#b09998",
          600: "#8f7473",
          700: "#775f5e",
          800: "#645150",
          900: "#564746"
        },
        green: {
          50: "#f7f7f5",
          100: "#ecede7",
          200: "#d9dace",
          300: "#c0c2af",
          400: "#afb098",
          500: "#979778",
          600: "#8a886c",
          700: "#74715a",
          800: "#5f5c4d",
          900: "#4e4b40"
        },
        blue: {
          50: "#f6f9f9",
          100: "#edf0f1",
          200: "#d7dfe0",
          300: "#b4c5c5",
          400: "#98afb0",
          500: "#6c898b",
          600: "#577072",
          700: "#475b5d",
          800: "#3d4e4f",
          900: "#364344"
        },
        purple: {
          50: "#f6f9f9",
          100: "#edeef2",
          200: "#dedfe7",
          300: "#cacbd7",
          400: "#b3b4c6",
          500: "#9998b0",
          600: "#8c89a2",
          700: "#79758d",
          800: "#636073",
          900: "#52515e"
        }
      },
      vibrant: {
        green: {
          50: "#eefff4",
          100: "#d7ffe7",
          200: "#b2ffd1",
          300: "#7dffb3",
          400: "#33f584",
          500: "#09de62",
          600: "#01b84e",
          700: "#059040",
          800: "#0a7137",
          900: "#0a5d2f"
        },
        lime: {
          50: "#f7ffe4",
          100: "#ebffc4",
          200: "#d8ff90",
          300: "#bbff50",
          400: "#a9ff34",
          500: "#7fe600",
          600: "#61b800",
          700: "#498b00",
          800: "#3b6d07",
          900: "#335c0b"
        },
        teal: {
          50: "#effefd",
          100: "#c7fffa",
          200: "#7dfff4",
          300: "#50f8ef",
          400: "#1de4e1",
          500: "#04c8c7",
          600: "#009da1",
          700: "#057d80",
          800: "#0a6165",
          900: "#0d5154"
        },
        blue: {
          50: "#eef9ff",
          100: "#d9f1ff",
          200: "#bce8ff",
          300: "#8edbff",
          400: "#59c5ff",
          500: "#34a9ff",
          600: "#1b8af5",
          700: "#1472e1",
          800: "#175bb6",
          900: "#194e8f"
        },
        purple: {
          50: "#f9f4ff",
          100: "#f0e5ff",
          200: "#e4d0ff",
          300: "#d0acff",
          400: "#b276ff",
          500: "#9542ff",
          600: "#8a34ff",
          700: "#6a0ee2",
          800: "#5b12b7",
          900: "#4c1093"
        },
        pink: {
          50: "#fef1f9",
          100: "#fee5f5",
          200: "#ffcaed",
          300: "#ff9fdd",
          400: "#ff63c4",
          500: "#ff34a9",
          600: "#f01287",
          700: "#d1056b",
          800: "#ad0758",
          900: "#8f0c4c"
        },
        red: {
          50: "#fff1f1",
          100: "#ffe3e3",
          200: "#ffcccf",
          300: "#ffa1a7",
          400: "#ff7d88",
          500: "#f93a4f",
          600: "#e71738",
          700: "#c30d2e",
          800: "#a30e2e",
          900: "#8b102f"
        },
        orange: {
          50: "#fff5ed",
          100: "#ffe9d4",
          200: "#ffcfa9",
          300: "#ffb37d",
          400: "#fe7f39",
          500: "#fc5c13",
          600: "#ed4109",
          700: "#c52e09",
          800: "#9c2610",
          900: "#7e2111"
        },
        yellow: {
          50: "#fefde8",
          100: "#fffdc2",
          200: "#fff87b",
          300: "#ffee45",
          400: "#fcdd13",
          500: "#ecc406",
          600: "#cc9902",
          700: "#a26d06",
          800: "#86550d",
          900: "#724611"
        }
      },
      paragraphIndent: {
        0: "0px"
      },
      tokenSetOrder: {
        0: "global",
        1: "budget-app",
        2: "bcc-theme"
      }
    },
  },
}