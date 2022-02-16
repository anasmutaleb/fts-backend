import { Repository } from 'typeorm';
import { ScrapeEntity } from '../../entities/scrape.entity';
export declare class ScrapeService {
    private readonly ScrapeRepository;
    constructor(ScrapeRepository: Repository<ScrapeEntity>);
    getAllScrape(): Promise<ScrapeEntity[]>;
    ScrapeThatBoi(): Promise<void>;
}
