import {
    Get,
    Post,
  
    Request,
    Controller,
  
  } from '@nestjs/common';
  import { AdminService } from "./admin.service";


@Controller()
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
  ) {}

  @Post('api/users/login')
  async loginEmail(@Request() req) {
    return await this.adminService.login(req.body);
  }

  @Post('api/users/register')
  async Register(@Request() req) {
    console.log(req.body);
    return await this.adminService.register(req.body);
  }
}