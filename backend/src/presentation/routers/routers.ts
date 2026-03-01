import type { Express } from 'express';
import type { ProductSaverController } from '../controller/prodcut.saver.controller.js';
import type { ProductFinderController } from '../controller/product.finder.controller.js';

export class Routers {
  public constructor(
    private productFinderController: ProductFinderController,
    private productSaverController: ProductSaverController,
  ) {}

  public setup(app: Express) {
    app.get('/products', (request, response) => this.productFinderController.execute(request, response));
    app.post('/products', (request, response) => this.productSaverController.execute(request, response));
  }
}
