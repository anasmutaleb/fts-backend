import { ScrapeService } from "./scrape.service";
export declare class ScrapeController {
    private readonly ScrapeService;
    constructor(ScrapeService: ScrapeService);
    getAllUnitTrust(): Promise<import("../../entities/scrape.entity").ScrapeEntity[]>;
}
