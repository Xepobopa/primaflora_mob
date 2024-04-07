import { AuthService } from './auth';
import { CategoryService } from './category';
import { ProductService } from './product';
import { LikesService } from './likes';
import { CartService } from './cart';

export const Service = {
    CategoryService,
    ProductService,
    LikesService,
    AuthService,
    CartService,
}

export * from './types.ts'