import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
@Injectable()
export class ProductService {

    findAll() {
        return [{
            id: 1,
            name: 'Product 1',
            price: 100
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200
        }
    ]
    }


    create (dto: CreateProductDto) {
        return dto ;
    }
}
