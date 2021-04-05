import babel from "rollup-plugin-babel";

export default {
  input: "index.ts",
  output: {
    file: "build/geometric.js",
    format: "umd",
    name: "geometric"
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    })
  ] 
};
