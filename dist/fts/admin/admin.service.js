"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const admin_entity_1 = require("../../entities/admin.entity");
let AdminService = class AdminService {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }
    async getAllAdmin() {
        return await this.adminRepository.find();
    }
    async login(req) {
        const findOneOptions = {
            user_email: req.user_email,
            user_pass: req.user_pass
        };
        const result = await this.adminRepository.findOne(findOneOptions);
        return result;
    }
    async loginresolver(req) {
        const findOneOptions = {
            user_email: req.user_email,
            user_pass: req.user_pass
        };
        const result = await this.adminRepository.findOne(findOneOptions);
        return result;
    }
    async register(req) {
        const admin = new admin_entity_1.AdminEntity();
        admin.user_firstname = req.user_firstname;
        admin.user_lastname = req.user_lastname;
        admin.user_occupation = req.user_occupation;
        admin.user_pass = req.user_pass;
        admin.user_birthdate = new Date('1995-12-17');
        admin.user_email = req.user_email;
        admin.user_earnings = req.user_earnings;
        admin.user_age = req.user_age;
        console.log(req);
        console.log(admin);
        return await this.adminRepository.save(admin);
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.AdminEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map