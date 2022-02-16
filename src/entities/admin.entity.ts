import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BeforeInsert,
    JoinTable,
    ManyToMany,
    OneToMany,
    BeforeUpdate
  } from 'typeorm';
  import { IsEmail } from 'class-validator';
  import * as crypto from 'crypto';
  import { BaseEntity } from './base.entity';
  import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

  @Entity('admin')
  @ObjectType()
  export class AdminEntity extends BaseEntity {
    @Field((type) => ID)
    @PrimaryGeneratedColumn()
    user_id: number;
  
    @Field((type) => String)
    @Column({nullable:true})
    user_firstname: string;

    @Field((type) => String)
    @Column({nullable:true})
    user_lastname: string;
  
    @Field(type => String)
    @Column({nullable:true})
    @IsEmail()
    user_email: string;

    @Field(type => String)
    @Column({nullable:true})
    user_occupation: string;

    @Field(type => String)
    @Column({nullable:true})
    user_age: string;

    @Field((type) => String)
    @Column({nullable:true})
    user_earnings: string;

    // Password is transparent from GraphQL and default TypeORM query
    @Column({
      nullable: true,
      select: false,
      // Automatically hashes passwords on save and on preparing for query
      transformer: {
        to: (value) => {
          if (value) {
            return crypto.createHmac('sha256', value).digest('hex');
          }
          return value;
        },
        from: (value) => {
          return value;
        }
      }
    })
    user_pass: string;
  
    @Field()
    @Column({ type: 'date', nullable: true })
    user_birthdate: Date;
  
  }
  