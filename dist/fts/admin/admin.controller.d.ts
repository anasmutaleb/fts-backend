import { AdminService } from "./admin.service";
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    loginEmail(req: any): Promise<import("../../entities/admin.entity").AdminEntity>;
    Register(req: any): Promise<import("../../entities/admin.entity").AdminEntity>;
}
