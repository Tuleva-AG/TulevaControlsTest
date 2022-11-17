import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import external from "rollup-plugin-peer-deps-external";
import sass from "rollup-plugin-sass";
import css from "rollup-plugin-import-css";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: false,
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: false,
        name: "@tuleva-ag/tuleva-controls-test",
      },
    ],
    plugins: [external(), resolve(), commonjs(), sass(), css(), typescript({ tsconfig: "./tsconfig.json" })],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
    external: ["react", "react-dom", "antd"],
  },
];
