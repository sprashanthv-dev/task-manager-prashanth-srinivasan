// Use ts-jest to handle files that end in .tsx with jest
export default {
  transform: {
    "^.+\\.ts?$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.json",
      },
    ],
  },
};
