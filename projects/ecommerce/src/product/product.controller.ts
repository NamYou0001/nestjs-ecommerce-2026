import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service.js';
@Controller('product')
export class ProductController {
    // constructor(
    //     private readonly ProductService: ProductService
    // ) {
    //     // Initialize the controller
        

    // }

    private readonly productService: ProductService = new ProductService();

    @Get()
    findAll(){
        return this.productService.findAll();
    }
}
