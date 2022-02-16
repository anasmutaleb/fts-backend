import { Module, HttpModule } from '@nestjs/common';
import { ScrapeEntity } from '../../entities/scrape.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScrapeService } from './scrape.service';
import { ScrapeController } from './scrape.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
          ScrapeEntity
        ]),
        HttpModule],
        controllers: [ScrapeController],
    providers: [ScrapeService],
})
export class ScrapeModule {}