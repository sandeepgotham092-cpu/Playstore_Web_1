import express from "express"
import { getallapps } from "../Controller/Apps"

export default (router: express.Router) => {
    router.get('/apps',getallapps);
};