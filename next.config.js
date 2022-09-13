/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
}

module.exports = {
	async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  env: {
    NEXT_PUBLIC_SENDGRID_API_KEY: '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'
  }
};
