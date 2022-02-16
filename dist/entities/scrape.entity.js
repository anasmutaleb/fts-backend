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
exports.ScrapeEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const graphql_1 = require("@nestjs/graphql");
let ScrapeEntity = class ScrapeEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ScrapeEntity.prototype, "ut_id", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ScrapeEntity.prototype, "ut_name", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ScrapeEntity.prototype, "ut_logo", void 0);
__decorate([
    (0, graphql_1.Field)(type => graphql_1.Float),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ScrapeEntity.prototype, "ut_risk", void 0);
__decorate([
    (0, graphql_1.Field)(type => graphql_1.Float),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ScrapeEntity.prototype, "ut_charge", void 0);
__decorate([
    (0, graphql_1.Field)(type => graphql_1.Float),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ScrapeEntity.prototype, "ut_percent", void 0);
__decorate([
    (0, graphql_1.Field)(type => graphql_1.Float),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ScrapeEntity.prototype, "ut_invest_amount", void 0);
ScrapeEntity = __decorate([
    (0, typeorm_1.Entity)('unit_trust'),
    (0, graphql_1.ObjectType)()
], ScrapeEntity);
exports.ScrapeEntity = ScrapeEntity;
//# sourceMappingURL=scrape.entity.js.map