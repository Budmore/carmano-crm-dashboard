import {
  createProxyMiddleware,
  type RequestHandler,
} from "http-proxy-middleware";
import { NextApiRequest, NextApiResponse } from "next";

// This function is required to allow the middleware to work with NextJS API routes
export const config = {
  api: {
    bodyParser: false, // Disable body parsing; let http-proxy-middleware handle it
    externalResolver: true, // Indicates that NextJS should not attempt to resolve API endpoints
  },
};

// Define the type for the proxy middleware
const apiProxy: RequestHandler = createProxyMiddleware({
  target: process.env.NEXT_PUBLIC_API_BASE_URL, // The target host
  changeOrigin: true, // Needed for virtual hosted sites
  pathRewrite: {
    "^/api/generic": "", // Rewrite URL path (remove the /api/generic part)
  },
});

const proxyMiddlewareHandler = (req: NextApiRequest, res: NextApiResponse) => {
  // If you need to modify the request before it's sent to the backend, do it here
  apiProxy(req, res, (result) => {
    if (result instanceof Error) {
      throw result;
    }

    throw new Error(`Request '${req.url}' is not proxiable!`);
  });
};

export default proxyMiddlewareHandler;
