import { Module, HttpModule } from '@nestjs/common';
import { AdminEntity } from '../../entities/admin.entity';
import { AdminResolver } from './admin.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([
          AdminEntity
        ]),
        HttpModule],
        controllers: [AdminController],
    providers: [AdminResolver,AdminService],
})
export class AdminModule {}