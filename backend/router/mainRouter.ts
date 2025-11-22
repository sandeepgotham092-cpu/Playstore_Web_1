import express from 'express'
import AppRouter from './AppRouter';
import AddAppRouter from './AddAppRouter'
const router = express.Router();

export default (): express.Router => {
    AppRouter(router);
    AddAppRouter(router)
    return router;
};