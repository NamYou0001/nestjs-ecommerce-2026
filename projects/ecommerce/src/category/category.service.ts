import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto.js';
@Injectable()
export class CategoryService {



    private categories = [
        {
            id: 1,
            name: 'Iphone'
        },
        {
            id: 2,
            name: 'Ipad'
        }
    ]

    findAll()
    {
        return this.categories;
    }

    findOne(id:number){
        const category = this.categories.find(category => category.id === id);
        if(!category) throw new NotFoundException(`Category with id ${id} not found`);
        // if(id !==1) {
        //     throw new NotFoundException(`Category with id ${id} not found`);
        // }

        return category;

    }


     create (dto:CreateCategoryDto) {
         const newCategory = {
            id: this.categories.length + 1,
        ...dto
         }
         this.categories.push(newCategory);
         return newCategory;
     }

     update(id:number, dto:CreateCategoryDto) {
       const category = this.findOne(id);
        Object.assign(category, dto);
        return category;
     }

     remove (id: number){
        this.findOne(id);
        this.categories = this.categories.filter(category => category.id !== id);
        return { message: `Category with id ${id} has been removed`};
     }









}
