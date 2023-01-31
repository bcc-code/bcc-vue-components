const StyleDictionaryModule = require("style-dictionary");
const { makeSdTailwindConfig } = require("sd-tailwindcss-transformer");

const StyleDictionary = StyleDictionaryModule.extend(
  makeSdTailwindConfig({
    type: "all",
    source: ["temp/figma-transformed.json"],
    buildPath: "./output/",
    tailwind: {
      content: ["../src/**/*.{js,ts,vue}"],
    },
  })
);

StyleDictionary.buildAllPlatforms();
