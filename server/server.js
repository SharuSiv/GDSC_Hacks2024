const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ 
    target: 'https://tfhub.dev', // target host
    changeOrigin: true, // needed for virtual hosted sites
    pathRewrite: {
      '^/api': '/mediapipe/tfjs-model/handskeleton/1/default/1', // rewrite path
    },
}));

app.listen(3000, () => {
    console.log('Proxy server running on http://localhost:3000');
});