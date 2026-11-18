import { Body, Controller, Get,Patch, Param, Post  , Delete} from '@nestjs/common';
import { ProductService } from './product.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) {}

    // private readonly productService: ProductService = new ProductService();

    @Get()
    findAll(){
        return this.productService.findAll();
    }



    // @Get(':id)')
    // findOne(@Param('id') id: number){
    //     return this.productService.findOne(id);
    // }

    @Post()
    create(@Body() dto:CreateProductDto){
        return this.productService.create(dto);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() dto: CreateProductDto) {
        return this.productService.update(id, dto);
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.productService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        this.productService.remove(id);
        return { removed: true };
    }

}
