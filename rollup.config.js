import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import jsx from 'acorn-jsx';
import { babel } from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';
export default {
  input: './src/input-mask.tsx',
  acornInjectPlugins: [jsx()],
  plugins: [
    typescript({ compilerOptions: { module: 'CommonJS' } }),
    commonjs({ extensions: ['.js', '.ts', '.tsx'] }),
    babel({ babelHelpers: 'runtime', plugins: ['@babel/plugin-transform-runtime'] }),
    filesize(),
  ],
  external: [/@babel\/runtime/, 'react'],
  output: {
    file: 'dist/input-mask.js',
    format: 'esm',
  },
};
