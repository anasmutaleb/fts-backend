import {
    Injectable,
    HttpStatus
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository, DeleteResult, In, Connection, getManager } from 'typeorm';
  import { ScrapeEntity } from '../../entities/scrape.entity';
  import * as _ from 'lodash';

  
  @Injectable()
  export class ScrapeService {
    constructor(
      @InjectRepository(ScrapeEntity)
      private readonly ScrapeRepository: Repository<ScrapeEntity>,
  
      //private readonly jwtService: JwtService,
    ) {}
  

    //////////////////////////
  async getAllScrape(): Promise<ScrapeEntity[]> {
    this.ScrapeThatBoi();
    return await this.ScrapeRepository.find();
  }

  async ScrapeThatBoi(){
    const http = require("http");
    const cheerio = require("cheerio");
    const puppeteer = require("puppeteer");
    
    //const db = require('./db');
    
    const { eq } = require("cheerio/lib/api/traversing");
    
    http
        .createServer(async function (_, res) {
            try {
                
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
    
                await page.goto('https://www.imoney.my/unit-trust-investments');
    
                const data = await page.evaluate(() => document.body.innerHTML)
    
    
                const $ = cheerio.load(data.toString());
                    
              
                const funds = [];
                $("[itemprop='itemListElement']").each((_i, row) => {
                    const $row = $(row);
    
                    const id = $row.find("[class='col col-6 col-lg-2 col-rate text-left']").find("[class='d-flex align-items-center']").attr('id');
                    const fund = $row.find("[class*='col-title']").find("h2").text().replace('\n','').trim();
                    const pic = $row.find("[class= 'col col-6 offset-3 col-lg-2 offset-lg-0 col-logo']").find('img').attr('src');
                    const risk = $row.find("[class*='col-title']").find("[class='info-desc']").find("dd").text().replace('Low\n','').replace('Medium\n','').replace('High\n','').trim();
                    const totalreturn = $row.find("[class='col col-6 col-lg-2 col-rate text-left']").find("[class='ir-value']").text().replace('%','');
                    const charge = $row.find("[class='col col-6 col-lg-1 col-rate text-right text-lg-left']").find("dd").text().replace('%','').trim();
                    
            
                    
                    funds.push({ id, fund, pic, risk, totalreturn, charge});
                  
                    
                    
                    //const funds = db.collection('funds').doc(id);
                    //unit_trust.set(funds);
                });
                //funds.splice(3,2);
                
                
                res.statusCode = 200;
                res.write(JSON.stringify(funds, null, 4));
                
            } catch (err) {
                res.statusCode = 400;
                res.write("Unable to process request.");
            }
            res.end();
        })
        .listen(8080);
  }
    
   
}