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
  import * as crypto from 'crypto';
  import { BaseEntity } from './base.entity';
  import { ObjectType, Field, ID, Int, Float } from '@nestjs/graphql';

  @Entity('unit_trust')
  @ObjectType()
  export class ScrapeEntity extends BaseEntity {
    @Field((type) => ID)
    @PrimaryGeneratedColumn()
    ut_id: number;
  
    @Field((type) => String)
    @Column()
    ut_name: string;

    @Field((type) => String)
    @Column()
    ut_logo: string;
  
    @Field(type => Float)
    @Column()
    ut_risk: number;

    @Field(type => Float)
    @Column()
    ut_charge: number;

    @Field(type => Float)
    @Column()
    ut_percent: number;

    @Field(type => Float)
    @Column()
    ut_invest_amount: number;
  }
  