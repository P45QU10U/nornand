module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/generateSiteMap')
    }

    return config
  },
  images: {
    domains: ['images-na.ssl-images-amazon.com', 'unsplash.com'],
  },
}
