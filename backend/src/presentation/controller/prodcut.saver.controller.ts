import type { Request, Response } from 'express';
import type { ProductSaverUseCase } from '../../app/usecase/product.saver.usecase.js';
import { ProductSaverInput } from '../../app/dto/product.saver.input.js';

export class ProductSaverController {
  public constructor(private productSaverUseCase: ProductSaverUseCase) {}

  public async execute(request: Request, response: Response) {
    try {
      const datas = request.body;
      const input = new ProductSaverInput(datas.name, datas.price, datas.description ?? null);
      const output = await this.productSaverUseCase.save(input);
      response.status(201).json(output);
    } catch (error) {
      if (error instanceof Error) {
        response.status(400).json({ error: error.message });
        return;
      }
      response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
