import {
    Injectable,
    HttpStatus
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository, DeleteResult, In, Connection, getManager } from 'typeorm';
  import { AdminEntity } from '../../entities/admin.entity';
  import { LoginAdminDto } from './dto/admin_login.dto';
  import { RegisterAdminDto } from './dto/admin_register.dto';
  import * as _ from 'lodash';

  
  @Injectable()
  export class AdminService {
    constructor(
      @InjectRepository(AdminEntity)
      private readonly adminRepository: Repository<AdminEntity>,
    ) {}
  

    //retrieves all data from user table in DB
  async getAllAdmin(): Promise<AdminEntity[]> {
    return await this.adminRepository.find();
  }
    
    /**
   * Logs in admin using email and password
   * @param loginAdminDto
   */
  async login(req: AdminEntity): Promise<AdminEntity> {
    const findOneOptions = {
      user_email: req.user_email,
      // Password dont need to be hashed because ValueTransformer in admin entity
      // already handled that for us
      user_pass: req.user_pass
    };

    const result = await this.adminRepository.findOne(findOneOptions);
    return result;
  }

    /**
   * Logs in admin using email and password
   * @param loginAdminDto
   */
     async loginresolver(req: LoginAdminDto): Promise<AdminEntity> {
      const findOneOptions = {
        user_email: req.user_email,
        // Password dont need to be hashed because ValueTransformer in admin entity
        // already handled that for us
        user_pass: req.user_pass
      };
  
      const result = await this.adminRepository.findOne(findOneOptions);
      return result;
    }

    /**
   * Adds User into Database
   * @param RegisterAdminDto
   */
     async register(req: RegisterAdminDto): Promise<AdminEntity> {
      const admin = new AdminEntity();
      admin.user_firstname = req.user_firstname;
      admin.user_lastname = req.user_lastname;
      admin.user_occupation = req.user_occupation;
      admin.user_pass = req.user_pass;
      admin.user_birthdate = new Date('1995-12-17');
      admin.user_email = req.user_email;
      admin.user_earnings = req.user_earnings;
      admin.user_age = req.user_age;
      console.log(req);
      console.log(admin);
      return await this.adminRepository.save(admin);
    }
}