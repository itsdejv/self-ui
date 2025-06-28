import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: './src/index.tsx',
    output: [
      { file: 'dist/index.js', format: 'cjs', exports: 'named' },
      { file: 'dist/index.es.js', format: 'es', exports: 'named' },
    ],
    plugins: [
      external(),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        preferBuiltins: false,
      }),
      commonjs({
        include: /node_modules/,
        extensions: ['.js', '.cjs'],
        transformMixedEsModules: true,
      }),
      typescript(),
      terser(),
    ],
  },
];
