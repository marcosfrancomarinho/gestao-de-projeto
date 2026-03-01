import type { Request, Response } from 'express';
import type { ProductFinderUseCase } from '../../app/usecase/product.finder.usecase.js';

export class ProductFinderController {
  public constructor(private productFinderUseCase: ProductFinderUseCase) {}

  public async execute(request: Request, response: Response) {
    try {
      const output = await this.productFinderUseCase.findAll();
      response.status(200).json(output);
    } catch (error) {
      if (error instanceof Error) {
        response.status(400).json({ error: error.message });
        return;
      }
      response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
