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
exports.ScrapeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const scrape_entity_1 = require("../../entities/scrape.entity");
let ScrapeService = class ScrapeService {
    constructor(ScrapeRepository) {
        this.ScrapeRepository = ScrapeRepository;
    }
    async getAllScrape() {
        this.ScrapeThatBoi();
        return await this.ScrapeRepository.find();
    }
    async ScrapeThatBoi() {
        const http = require("http");
        const cheerio = require("cheerio");
        const puppeteer = require("puppeteer");
        const { eq } = require("cheerio/lib/api/traversing");
        http
            .createServer(async function (_, res) {
            try {
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                await page.goto('https://www.imoney.my/unit-trust-investments');
                const data = await page.evaluate(() => document.body.innerHTML);
                const $ = cheerio.load(data.toString());
                const funds = [];
                $("[itemprop='itemListElement']").each((_i, row) => {
                    const $row = $(row);
                    const id = $row.find("[class='col col-6 col-lg-2 col-rate text-left']").find("[class='d-flex align-items-center']").attr('id');
                    const fund = $row.find("[class*='col-title']").find("h2").text().replace('\n', '').trim();
                    const pic = $row.find("[class= 'col col-6 offset-3 col-lg-2 offset-lg-0 col-logo']").find('img').attr('src');
                    const risk = $row.find("[class*='col-title']").find("[class='info-desc']").find("dd").text().replace('Low\n', '').replace('Medium\n', '').replace('High\n', '').trim();
                    const totalreturn = $row.find("[class='col col-6 col-lg-2 col-rate text-left']").find("[class='ir-value']").text().replace('%', '');
                    const charge = $row.find("[class='col col-6 col-lg-1 col-rate text-right text-lg-left']").find("dd").text().replace('%', '').trim();
                    funds.push({ id, fund, pic, risk, totalreturn, charge });
                });
                res.statusCode = 200;
                res.write(JSON.stringify(funds, null, 4));
            }
            catch (err) {
                res.statusCode = 400;
                res.write("Unable to process request.");
            }
            res.end();
        })
            .listen(8080);
    }
};
ScrapeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(scrape_entity_1.ScrapeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ScrapeService);
exports.ScrapeService = ScrapeService;
//# sourceMappingURL=scrape.service.js.map