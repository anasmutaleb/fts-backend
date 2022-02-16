import {Resolver,Query, Args, Mutation} from "@nestjs/graphql";
import { AdminEntity} from "../../entities/admin.entity";
import { AdminService } from "./admin.service";
import {LoginAdminDto} from "./dto/admin_login.dto";
import {AdminUploadImageDto} from "./dto/admin_image.dto";

//Implementing GraphQL instead of Express, needs tweaking before usable
@Resolver((of) => AdminEntity)
export class AdminResolver {
//   constructor(
//     private authorsService: AuthorsService,
//     private postsService: PostsService,
//   ) {}
constructor(private AdminService: AdminService) {}

@Query(()=> AdminEntity,{name:'adminLogin'})
async adminLogin(@Args('input') adminDTO:LoginAdminDto):Promise<AdminEntity>{
    return this.AdminService.loginresolver(adminDTO);
}
// @Query(()=> AdminEntity,{name:'adminImage'})
// async adminUploadImage(@Args('input') adminDTO:AdminUploadImageDto):Promise<AdminEntity>{
//     return this.AdminService.validateAdmin(adminDTO.ad_email,adminDTO.ad_image);
// }
@Query(()=> [AdminEntity],{name:'adminAll'})
async getAllAdmin():Promise<AdminEntity[]>{
    return this.AdminService.getAllAdmin();
}

}