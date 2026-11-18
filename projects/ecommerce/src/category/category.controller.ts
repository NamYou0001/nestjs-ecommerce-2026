import { Controller, Get, Param, Post ,Body, Patch, Delete} from '@nestjs/common';
import{CategoryService} from './category.service.js';
import { CreateCategoryDto } from './dto/create-category.dto.js';
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}
    // constructore(private readonly categoryService: CategoryService) {}
    
@Get()
 findAll(){
     return this.categoryService.findAll(); 
 }
 @Get(':id')

 findOne(@Param('id') id: number){
    return this.categoryService.findOne(id);
 }

 @Post()
 create(@Body() dto:CreateCategoryDto){
 return this.categoryService.create(dto);
 }



 @Patch(':id')
    update(@Param('id') id: number, @Body() dto: CreateCategoryDto) {
        return this.categoryService.update(id, dto);
    }   

    @Delete(':id')
    remove(@Param('id') id: number){
        this.categoryService.remove(id);
        return { removed: true };
    }
}
