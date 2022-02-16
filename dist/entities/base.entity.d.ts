import { BaseEntity as TypeormBaseEntity } from 'typeorm';
export declare abstract class BaseEntity extends TypeormBaseEntity {
    created_at: Date;
    updated_at: Date;
    setUpdatedAt(): void;
}
