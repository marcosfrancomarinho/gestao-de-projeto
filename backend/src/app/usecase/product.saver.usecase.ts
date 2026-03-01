import { Product } from '../../domain/entities/product.js';
import type { IdGenerator } from '../../domain/gateway/id.generator.js';
import type { ProdcutSaver } from '../../domain/gateway/product.saver.js';
import type { ProductSaverInput } from '../dto/product.saver.input.js';
import { ProductSaverOutput } from '../dto/product.saver.output.js';

export class ProductSaverUseCase {
  public constructor(
    private productSaver: ProdcutSaver,
    private idGenerator: IdGenerator,
  ) {}

  public async save(productInput: ProductSaverInput): Promise<ProductSaverOutput> {
    const id = this.idGenerator.generate();
    const product = Product.create(id, productInput.name, productInput.price, productInput.description);
    await this.productSaver.save(product);
    return new ProductSaverOutput(id);
  }
}
