import { IsString,  IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsString()
    'name':string;
}
