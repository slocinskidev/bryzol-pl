/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ['@workspace/ui'],
	async redirects() {
		return [
			{
				source: '/oferta',
				destination: '/',
				permanent: false,
			},
			{
				source: '/oferta/cateringowa',
				destination: '/oferta/catering',
				permanent: true,
			},
			{
				source: '/o-nas',
				destination: '/#about',
				permanent: true,
			},
		];
	},
};

export default nextConfig;
