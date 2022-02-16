import {
    Get,
    Post,
    Body,
    Put,
    Delete,
    Param,
    Request,
    Controller,
    UsePipes,
    UseGuards,
    Inject,
    forwardRef,
    HttpStatus,
    Query,
    ValidationPipe,
    Render,
    Res
  } from '@nestjs/common';
  import { ScrapeService } from "./scrape.service";


@Controller()
export class ScrapeController {
  constructor(
    private readonly ScrapeService: ScrapeService,
  ) {}

  @Get('api/scrape/unit_trust')
  async getAllUnitTrust() {
    return await this.ScrapeService.getAllScrape();
  }
}