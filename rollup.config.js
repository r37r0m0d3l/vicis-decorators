import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const INPUT_NAME = "index.js";
const OUTPUT_NAME = "vicis-decorators";
const UMD_NAME = "VicisDecorators";

export default {
  input: `./src/${INPUT_NAME}`,
  output: [
    {
      file: `./dist/${OUTPUT_NAME}.cjs`,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: `./dist/${OUTPUT_NAME}.mjs`,
      format: "es",
      sourcemap: true,
    },
    {
      file: `./dist/${OUTPUT_NAME}.js`,
      format: "umd",
      globals: {
        "lodash.clonedeep": "lodash.clonedeep",
        "lodash.merge": "lodash.merge",
        "vicis": "vicis",
      },
      name: UMD_NAME,
      sourcemap: true,
    },
  ],
  plugins: [
    babel({ babelrc: true }),
    resolve(),
    commonjs(),
    terser({
      keep_classnames: true,
      keep_fnames: true,
      output: {
        comments: false,
      },
      warnings: true,
    }),
  ],
  external: ["lodash.clonedeep", "lodash.merge", "vicis"],
};
