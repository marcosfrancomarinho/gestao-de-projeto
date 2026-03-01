import { Product } from '../../domain/entities/product.js';
import type { ProductFinder } from '../../domain/gateway/product.finder.js';
import { prisma } from '../client/prisma.js';

export class PrismaProductFinder implements ProductFinder {
  public async findAll(): Promise<Product[]> {
    const products = await prisma.product.findMany();

    return products.map((product) => {
      return Product.create(product.id, product.name, product.price.toNumber(), product.description);
    });
  }
}
