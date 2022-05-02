import "express-async-errors";

import express from "express";

import errorHandler from "./middlewares/errorHandler";
import AuthRoutes from "./routes/auth";
import PrivateRoutes from "./routes/private";
import PublicRoutes from "./routes/public";

const app = express();

// Middlewares
app.use(express.json());

// Static files
app.use(express.static("public"));

// Routes
app.use("", AuthRoutes);
app.use("", PublicRoutes);
app.use("", PrivateRoutes); // Private should be the last route. If not, other routes will be protected

// Error handler middleware
app.use(errorHandler);

// Export default
export default app;