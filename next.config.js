/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "a.ltrbxd.com" },
      { protocol: "https", hostname: "image.tmdb.org" },
      { protocol: "https", hostname: "i.postimg.cc" },
      { protocol: "https", hostname: "upload.wikimedia.org" }
    ]
  }
};

module.exports = nextConfig;
