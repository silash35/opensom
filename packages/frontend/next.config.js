export default () => {
  /**
   * @type {import('next').NextConfig}
   */
  let nextConfig = {
    reactStrictMode: true,
    env: {
      SITE_URL: process.env.SITE_URL,
      BACKEND_URL: process.env.BACKEND_URL,
    },
    sassOptions: {
      includePaths: ["/src/styles"],
    },
    compiler: {},
  };

  if (process.env.NODE_ENV === "production") {
    nextConfig.compiler.removeConsole = true;
  }

  if (process.env.KEEP_PROPERTIES !== "true") {
    nextConfig.compiler.reactRemoveProperties = {
      properties: ["^data-test$", "^data-testid$", "^data-cy$"],
    };
  }

  return nextConfig;
};
