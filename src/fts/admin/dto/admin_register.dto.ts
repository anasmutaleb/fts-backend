import { IsNotEmpty } from 'class-validator';

export class RegisterAdminDto {

  @IsNotEmpty()
   user_email?: string;


  @IsNotEmpty()
   user_firstname?: string;


  @IsNotEmpty()
   user_lastname?: string;


  @IsNotEmpty()
   user_occupation?: string;


  @IsNotEmpty()
   user_age?: string;


  @IsNotEmpty()
   user_earnings?: string;


  @IsNotEmpty()
   user_birthdate?: Date;


  @IsNotEmpty()
   user_pass?: string;
}
