import type { Product } from '../../domain/entities/product.js';
import type { ProdcutSaver } from '../../domain/gateway/product.saver.js';
import { prisma } from '../client/prisma.js';

export class PrismaProdctSaver implements ProdcutSaver {
  public async save(product: Product): Promise<void> {
    await prisma.product.create({
      data: {
        id: product.getId(),
        name: product.getName(),
        price: product.getPrice(),
        description: product.getDescription(),
      },
    });
  }
}
