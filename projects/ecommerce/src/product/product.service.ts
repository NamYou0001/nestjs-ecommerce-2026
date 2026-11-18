import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { NotFoundException } from '@nestjs/common';
import { CategoryService } from '../category/category.service.js';
@Injectable()
export class ProductService {

    // private readonly categoryService: CategoryService = new CategoryService();
    constructor(private readonly categoryService: CategoryService) {}
    
    private products =[
        {
            id: 1,
            name: 'Product 1',
            price: 100,
            categoryId: 1
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200,
            categoryId: 1
        },
        {
            id: 3,
            name: 'Product 3',
            price: 300,
            categoryId: 2
        }
    ]

    findAll() {
       return this.products;
    }

    findOne(id: number) {
        const product = this.products.find(product => product.id === id);
        if(!product) throw new NotFoundException(`Product with id ${id} not found`);
        // if(!product) throw new NotFoundException(`Product with id ${id} not found`);
        return product;
    }




    create (dto: CreateProductDto) {
   
        this.categoryService.findOne(dto.categoryId);
        const newProduct = {
            id: this.products.length+1,
            ...dto
        }
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, dto: CreateProductDto) {
        const product = this.findOne(id);
        Object.assign(product, dto);
        return product ;
    }


    remove(id: number) {
    this.findOne(id);
    this.products = this.products.filter((p) => p.id !== id);
    return { removed: true };
  }

}
