import { IsNotEmpty } from 'class-validator';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AdminUploadImageDto {

  @Field((type)=> String)
  @IsNotEmpty()
  readonly ad_email: string;

  @Field((type)=> String)
  @IsNotEmpty()
  readonly ad_image: string;
}
