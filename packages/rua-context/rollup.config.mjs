import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescriptConfig from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import typescript from "typescript";
import pkg from "./package.json" assert { type: "json" };

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.ts",
  output: {
    file: pkg.module,
    format: "es",
    sourcemap: true,
  },
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescriptConfig({
      typescript,
    }),
    production &&
      terser({
        // terser plugin config here
      }),
  ],
};
