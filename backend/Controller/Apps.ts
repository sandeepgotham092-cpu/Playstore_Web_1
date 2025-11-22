import express, { Request, Response } from "express";
import  AppModel, { creatApp, getApps } from '../models/AppModel';

export const getallapps = async (req:Request,res:Response)=>{
    try {
        const apps = await getApps();
        return res.status(200).json(apps)
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}

interface AppRequestBody {
            name: string;
            description: string;
            stars: string; 
            img: string;
        }
export const addapps = async (req: Request<{}, {}, AppRequestBody>,res:Response)=>{
    try {
        const {name,description,stars,img} = req.body;
        const Addedapp = await creatApp({name,description,stars,img});
        return res.status(200).json(Addedapp).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}

