import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from 'rollup-plugin-copy';
const svgr = require('@svgr/rollup').default;

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  watch: {
    exclude: ["node_modules/**"],
  },
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  context: 'this',
  plugins: [
    svgr(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: [".css", ".scss"],
      use: ["sass"],
    }),
    copy({
      targets: [
        { src: 'src/assets/**/*', dest: 'lib/assets' },
        {
          src: "src/components/index.scss",
          dest: "lib/components",
          rename: "index.scss",
        },
        {
          src: "src/styles/variables.scss",
          dest: "lib/styles",
          rename: "variables.scss",
        },
        {
          src: "src/styles/web-shared.scss",
          dest: "lib/styles",
          rename: "web-shared.scss",
        }
      ],
    }),
  ],
};