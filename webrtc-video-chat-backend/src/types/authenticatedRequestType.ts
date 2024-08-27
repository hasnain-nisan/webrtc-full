import { Request } from "express";
import { User } from "./usertype";

export interface AuthenticatedRequest extends Request {
    user?: User;
}