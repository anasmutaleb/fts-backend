import { AdminEntity } from "../../entities/admin.entity";
import { AdminService } from "./admin.service";
import { LoginAdminDto } from "./dto/admin_login.dto";
export declare class AdminResolver {
    private AdminService;
    constructor(AdminService: AdminService);
    adminLogin(adminDTO: LoginAdminDto): Promise<AdminEntity>;
    getAllAdmin(): Promise<AdminEntity[]>;
}
