/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'blogger.googleusercontent.com', // ✅ for Blogger-hosted images
      'lh3.googleusercontent.com'      // ✅ optional (Google-hosted)
    ],
  },
};

export default nextConfig;
