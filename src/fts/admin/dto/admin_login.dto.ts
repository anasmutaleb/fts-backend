import { IsNotEmpty } from 'class-validator';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class LoginAdminDto {

  @Field((type)=> String)
  @IsNotEmpty()
  readonly user_email: string;

  @Field((type)=> String)
  @IsNotEmpty()
  readonly user_pass: string;
}
