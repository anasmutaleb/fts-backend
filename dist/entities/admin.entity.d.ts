import { BaseEntity } from './base.entity';
export declare class AdminEntity extends BaseEntity {
    user_id: number;
    user_firstname: string;
    user_lastname: string;
    user_email: string;
    user_occupation: string;
    user_age: string;
    user_earnings: string;
    user_pass: string;
    user_birthdate: Date;
}
