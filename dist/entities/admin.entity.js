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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminEntity = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const crypto = require("crypto");
const base_entity_1 = require("./base.entity");
const graphql_1 = require("@nestjs/graphql");
let AdminEntity = class AdminEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AdminEntity.prototype, "user_id", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AdminEntity.prototype, "user_firstname", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AdminEntity.prototype, "user_lastname", void 0);
__decorate([
    (0, graphql_1.Field)(type => String),
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], AdminEntity.prototype, "user_email", void 0);
__decorate([
    (0, graphql_1.Field)(type => String),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AdminEntity.prototype, "user_occupation", void 0);
__decorate([
    (0, graphql_1.Field)(type => String),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AdminEntity.prototype, "user_age", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AdminEntity.prototype, "user_earnings", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        select: false,
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
    }),
    __metadata("design:type", String)
], AdminEntity.prototype, "user_pass", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], AdminEntity.prototype, "user_birthdate", void 0);
AdminEntity = __decorate([
    (0, typeorm_1.Entity)('admin'),
    (0, graphql_1.ObjectType)()
], AdminEntity);
exports.AdminEntity = AdminEntity;
//# sourceMappingURL=admin.entity.js.map