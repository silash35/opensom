import server from "./app";

const port = process.env.PORT;
console.log(`Server listening on port ${port}`);

// Start server
if (import.meta.env.PROD) {
  server.listen(port);
}

export const viteNodeApp = server;
