/// <reference path="../.astro/types.d.ts" />

interface CloudflareEnv {
  AI: Ai;
  BROWSER: Fetcher;
  REPORTS: R2Bucket;
  EIA_API_KEY: string;
}

type Runtime = import("@astrojs/cloudflare").Runtime<CloudflareEnv>;

declare namespace App {
  interface Locals extends Runtime {}
}
