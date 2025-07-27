import express, {Express} from 'express';
import routers from './components';

const server: Express = express();
const port = process.env.PORT || process.env.APP_PORT;

server.use(express.json());
server.use(express.urlencoded({extended: true}));

import cors from 'cors';

server.use(cors());

server.use((req, res, next) => {
    res.set('Cache-Control', 'no-cache');
    next();
});

server.use('/api/v1', routers);

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
