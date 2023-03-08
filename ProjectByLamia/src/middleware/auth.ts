import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

interface User {
    id: string,
    name: string
    
}

const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            return res.status(403).json({ "message": "Access Denaied" });
        }
        let user = jwt.verify(token, process.env.MY_SECRETKEY as string) as User
        console.log(user);
        res.locals.user = user;
        next();
    } 
    catch (error) {
        res.json({ error: error });
    }



}
export default auth;