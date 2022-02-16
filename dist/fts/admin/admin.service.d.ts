import { Repository } from 'typeorm';
import { AdminEntity } from '../../entities/admin.entity';
import { LoginAdminDto } from './dto/admin_login.dto';
import { RegisterAdminDto } from './dto/admin_register.dto';
export declare class AdminService {
    private readonly adminRepository;
    constructor(adminRepository: Repository<AdminEntity>);
    getAllAdmin(): Promise<AdminEntity[]>;
    login(req: AdminEntity): Promise<AdminEntity>;
    loginresolver(req: LoginAdminDto): Promise<AdminEntity>;
    register(req: RegisterAdminDto): Promise<AdminEntity>;
}
