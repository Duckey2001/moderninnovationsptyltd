// Start Vite dev server with default config (picks up vite.config.ts)
import { createServer } from 'vite';

const server = await createServer();
await server.listen();
server.printUrls();
