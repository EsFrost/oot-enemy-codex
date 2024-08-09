/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.pokemon.com',
          port: '',
          pathname: '/**',
        }
      ], // add the domain here
      },
};

export default nextConfig;
