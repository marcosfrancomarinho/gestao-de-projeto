import type { Product } from "../entities/product.js";

export interface ProdcutSaver {
  save (data: Product): Promise<void>;
}