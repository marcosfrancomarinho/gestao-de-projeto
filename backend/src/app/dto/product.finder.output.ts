export class ProductFinderOutput {
  public constructor(
    public id: string,
    public name: string,
    public price: number,
    public description: string | null,
  ) {}
}
