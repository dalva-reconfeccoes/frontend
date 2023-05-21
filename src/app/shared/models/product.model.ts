import { Quantity } from './quantity.model';
import { Image } from './image.model';

export class Product {
    id: number = 0;
    uuid: string = '';
    header: string = '';
    color: string = '';
    knitted: string = '';
    description: string = '';
    price: number = 0;
    quantity: number = 0;
    type: string = '';
    sub_type: string = '';
    sex: string = '';
    status: string = '';
    is_active: boolean = false;
    images: Array<Image>;
    quantities: Array<Quantity>;
}
