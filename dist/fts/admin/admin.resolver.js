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
exports.AdminResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const admin_entity_1 = require("../../entities/admin.entity");
const admin_service_1 = require("./admin.service");
const admin_login_dto_1 = require("./dto/admin_login.dto");
let AdminResolver = class AdminResolver {
    constructor(AdminService) {
        this.AdminService = AdminService;
    }
    async adminLogin(adminDTO) {
        return this.AdminService.loginresolver(adminDTO);
    }
    async getAllAdmin() {
        return this.AdminService.getAllAdmin();
    }
};
__decorate([
    (0, graphql_1.Query)(() => admin_entity_1.AdminEntity, { name: 'adminLogin' }),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_login_dto_1.LoginAdminDto]),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "adminLogin", null);
__decorate([
    (0, graphql_1.Query)(() => [admin_entity_1.AdminEntity], { name: 'adminAll' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminResolver.prototype, "getAllAdmin", null);
AdminResolver = __decorate([
    (0, graphql_1.Resolver)((of) => admin_entity_1.AdminEntity),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminResolver);
exports.AdminResolver = AdminResolver;
//# sourceMappingURL=admin.resolver.js.map