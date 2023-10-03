import { UserDto } from "../shared/dto/user-dto.model";
import { IUserInterface } from "./iuser-interface";

class UserInterface implements IUserInterface {
    constructor(public user: UserDto) { 
    }
    
    getFullName(user: UserDto): string {
        var fullName = user.firstName + " " + user.lastName;
        return fullName;
    } 
}
