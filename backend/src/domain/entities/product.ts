import {
  IdRequiredError,
  IdTypeInvalidError,
  NameRequiredError,
  NameTypeInvalidError,
  PriceInvalidError,
  PriceTypeInvalidError,
} from '../error/product.error.js';

export class Product {
  private constructor(
    private id: string,
    private name: string,
    private price: number,
    private description: string | null,
  ) {}

  public static create(id: string, name: string, price: number, description: string | null): Product {
    this.validate(id, name, price);
    return new Product(id, name, price, description);
  }

  private static validate(id: string, name: string, price: number): void {
    if (typeof price !== 'number') {
      throw new PriceTypeInvalidError();
    }
    if (typeof name !== 'string') {
      throw new NameTypeInvalidError();
    }
    if (typeof id !== 'string') {
      throw new IdTypeInvalidError();
    }
    if (!id) {
      throw new IdRequiredError();
    }
    if (!name) {
      throw new NameRequiredError();
    }
    if (price <= 0) {
      throw new PriceInvalidError();
    }
    if (isNaN(price)) {
      throw new PriceInvalidError();
    }

    if (id.trim().length === 0) {
      throw new IdRequiredError();
    }
    if (name.trim().length === 0) {
      throw new NameRequiredError();
    }
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }
  public getDescription(): string | null {
    return this.description;
  }
}
