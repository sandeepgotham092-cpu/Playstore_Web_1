import express from "express"
import { addapps } from "../Controller/Apps"

export default (router: express.Router) => {
    router.post('/addapps',addapps);
};