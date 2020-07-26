import {Comment} from './comment';

export class Dish {
    name : string;
    id: string;
    image: string;
    category : string;
    featured: boolean;
    label : string;
    price : string;
    description: string;      
    comments: Comment[];  
}