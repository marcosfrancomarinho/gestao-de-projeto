import type { Product } from '../entities/product.js';

export interface ProductFinder {
  findAll(): Promise<Product[]>;
}
