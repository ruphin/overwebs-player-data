import { defineConfig } from 'vite';

// Library build: emits overwebs-player-data.js in the package root (the "main" entry).
// gluonjs stays external and is imported via the sibling node_modules path so the
// published file keeps working unbundled, exactly like the previous gulp output.
export default defineConfig({
  build: {
    outDir: '.',
    emptyOutDir: false,
    copyPublicDir: false,
    minify: true,
    lib: {
      entry: 'src/overwebs-player-data.js',
      formats: ['es'],
      fileName: () => 'overwebs-player-data.js'
    },
    rolldownOptions: {
      external: [/^gluonjs(\/.*)?$/],
      output: {
        // GluonElement derives the tag name from the class name, so it must survive minification.
        keepNames: true,
        paths: { 'gluonjs/gluon.js': '../gluonjs/gluon.js' }
      }
    }
  }
});
