import express from 'express';
import config from './config/index.js';

const app = express();

app.listen(config.serverConfig, () => {
    console.log(`Server is running on port ${config.serverConfig}`);
});