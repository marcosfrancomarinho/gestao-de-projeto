import type { ProductFinder } from '../../domain/gateway/product.finder.js';
import { ProductFinderOutput } from '../dto/product.finder.output.js';

export class ProductFinderUseCase {
  public constructor(private productFinder: ProductFinder) {}

  public async findAll(): Promise<ProductFinderOutput[]> {
    const products = await this.productFinder.findAll();
    return products.map((product) => {
      return new ProductFinderOutput(product.getId(), product.getName(), product.getPrice(), product.getDescription());
    });
  }
}
