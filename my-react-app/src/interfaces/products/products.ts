export interface Product {
  id: number;
  code: string;
  productName: string;
  type: ProductType;
  downloadLink?: string;
  deliveryCost?: number;
}

export enum ProductType {
  DIGITAL = "digital",
  PHYSICAL = "physical",
}
