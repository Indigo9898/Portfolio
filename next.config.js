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
