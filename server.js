import express from 'express';
import config from './src/config/Config.js';
import Routes from './src/routes/Routes.js';

const app = express();

app.use(express.json());
app.use('/api', Routes);

app.listen(config.port, () => {
    console.log(`${config.appName} running on port ${config.port}`);
});
