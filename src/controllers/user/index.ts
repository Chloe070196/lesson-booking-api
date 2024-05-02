import { Request, Response } from "express";
import { UserService } from "../../services/UserService.ts";
import { sendDataResponse, sendMessageResponse } from "../../utils/responses.ts";

export class UserController { 
    public constructor(private readonly userService: UserService) {
        this.register = this.register.bind(this);
    }
    
    public async register(req: Request, res: Response){
        const email = req.body.email
        if(await this.userService.doesUserExist(email)) {
            sendMessageResponse(res, 400, "email already in use")
            return
        }
        const newUser = await this.userService.register(req.body)
        sendDataResponse(res, 201, newUser)
    }
}
