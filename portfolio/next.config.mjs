/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        // Grab the existing rule that handles SVG imports
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg')
        );

        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // only process SVG files with ?url
            },
            // Convert all other SVG imports to React components
            {
                test: /\.svg$/i,
                issuer: { not: /\.(css|scss|sass)$/ }, // Exclude SVG imports from CSS/SCSS/SASS
                resourceQuery: { not: /url/ }, // Exclude SVG files with ?url
                use: ['@svgr/webpack'],
            },
        );

        // Modify the file loader rule to ignore SVG files, as we're handling them separately
        fileLoaderRule.exclude = /\.svg$/i;

        return config;
    },
};

export default nextConfig;