import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const input = './src/index.ts';

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const plugins = [
  nodeResolve({
    browser: true,
    extensions: ['.ts', 'tsx'],
  }),
  typescript({
    tsconfig: './tsconfig.build.json',
    typescript: require('typescript'),
  }),
];

const rollupConfig = [
  {
    input,
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    plugins,
    external,
  },
  {
    input,
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    plugins,
    external,
  },
];

export default rollupConfig;
