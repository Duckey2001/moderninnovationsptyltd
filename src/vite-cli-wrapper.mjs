/**
 * Vite CLI Wrapper — intercepts the deprecated `optimize` subcommand.
 * When `vite optimize` is called (which is deprecated in Vite 7+),
 * this wrapper intercepts it and exits cleanly with code 0, allowing
 * the actual `vite` dev server to start.
 * 
 * Install: Override the vite binary in node_modules to point here,
 * or set as the main script.
 */
const { spawn } = await import('child_process');
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Check if the 'optimize' subcommand was invoked
const args = process.argv.slice(2);
const isOptimize = args[0] === 'optimize';

if (isOptimize) {
  // Deprecated command — skip it gracefully
  process.exit(0);
} else {
  // Forward to the real Vite CLI
  const viteBin = resolve(__dirname, '..', 'node_modules', 'vite', 'dist', 'node', 'cli.js');
  spawn(process.execPath, [viteBin, ...args], {
    stdio: 'inherit',
    cwd: resolve(__dirname, '..'),
  }).on('exit', (code) => {
    process.exit(code ?? 0);
  });
}
