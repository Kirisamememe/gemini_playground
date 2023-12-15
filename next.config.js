/** @type {import('next').NextConfig} */
const nextConfig = {}

const dotenv = require('dotenv');

module.exports = {
    // ...
    env: {
        ...dotenv.config().parsed,
    },
};

// module.exports = nextConfig
