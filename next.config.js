/** @type {import('next').NextConfig} */
const repoName = "AleshinloyeOlamilekan.github.io";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? `/${repoName}` : "",
  assetPrefix: isGitHubPages ? `/${repoName}/` : "",
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
