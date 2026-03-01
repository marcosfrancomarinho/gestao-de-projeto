export class ProductSaverInput {
  public constructor(
    public name: string,
    public price: number,
    public description: string | null,
  ) {}
}
