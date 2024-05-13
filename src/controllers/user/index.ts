import { Request, Response } from "express";
import { UserService } from "../../services/user/index.ts";
import { sendDataResponse, sendMessageResponse } from "../../utils/responses.ts";


// TODO: write integration tests
export class UserController { 
    public constructor(private readonly userService: UserService) {
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }

    private userErrorMap = {
        emailAlreadyInUse: "The email provided is already in use",
        failedAuth: "Incorrect email or password",
        failedRegistration: "Failed to register new user",
        failedTokenGen: "Failed to generate authentication token"
    }
    
    public async register(req: Request, res: Response){
        const email = req.body.email
        if(await this.userService.doesUserExist(email)) {
            sendMessageResponse(res, 400, this.userErrorMap.emailAlreadyInUse)
            return
        }
        const newUser = await this.userService.register(req.body)
        if (!newUser) {
            sendMessageResponse(res, 400, this.userErrorMap.failedRegistration)
          }
        const cleanUser = this.userService.removeSensitiveInfo(newUser.generatedMaps[0], ['password', 'email'])
        sendDataResponse(res, 201, cleanUser)
    }

    public async login(req: Request, res: Response){
        const { email, password, id, username } = req.body
        const foundUser = await this.userService.doesUserExist(email)
        if(!foundUser) {
            sendMessageResponse(res, 401, this.userErrorMap.failedAuth)
            return
        }
        const areCredentialsValid = await this.userService.checkCredentials(email, password)
        if (!areCredentialsValid) {
            sendMessageResponse(res, 401, this.userErrorMap.failedAuth)
            return
        }
        const token = await this.userService.generateJwt(email)
        if (!token) {
            sendMessageResponse(res, 500, this.userErrorMap.failedTokenGen)
        }
        sendDataResponse(res, 201, { token, username, id })
    }
}
