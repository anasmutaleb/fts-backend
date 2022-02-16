import { BaseEntity as TypeormBaseEntity, Column, BeforeUpdate } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export abstract class BaseEntity extends TypeormBaseEntity {
  @Field()
  @Column({
    type: 'datetime',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP'
  })
  created_at: Date;

  @Field()
  @Column({
    type: 'datetime',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP'
  })
  updated_at: Date;

  @BeforeUpdate()
  setUpdatedAt() {
    this.updated_at = new Date();
  }
}
