"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapeModule = void 0;
const common_1 = require("@nestjs/common");
const scrape_entity_1 = require("../../entities/scrape.entity");
const typeorm_1 = require("@nestjs/typeorm");
const scrape_service_1 = require("./scrape.service");
const scrape_controller_1 = require("./scrape.controller");
let ScrapeModule = class ScrapeModule {
};
ScrapeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                scrape_entity_1.ScrapeEntity
            ]),
            common_1.HttpModule
        ],
        controllers: [scrape_controller_1.ScrapeController],
        providers: [scrape_service_1.ScrapeService],
    })
], ScrapeModule);
exports.ScrapeModule = ScrapeModule;
//# sourceMappingURL=scrape.module.js.map