import { UserDto } from "../shared/dto/user-dto.model";

export interface IUserInterface {
    user: UserDto;
    getFullName: (user: UserDto) => string;
}


