/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["@workspace/ui"],
	async redirects() {
		return [
			{
				source: '/oferta',
				destination: '/',
				permanent: false,
			},
		];
	},
};

export default nextConfig;
