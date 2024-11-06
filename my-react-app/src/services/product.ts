import { Product } from "../interfaces/products/products";
import {
  ApiResponse,
  buildApiResponseAsync,
  handleApiServerError,
} from "./api";
import { backendRoutes } from "./endpoint";
import { pathBuilder } from "./path-builder";

export async function getproductsList(): Promise<ApiResponse<Product[]>> {
  const res = await fetch(backendRoutes.products.list, {
    method: "GET",
  });

  if (!res.ok) return handleApiServerError(res);
  return buildApiResponseAsync(res.json());
}

export async function search(value: string): Promise<ApiResponse<Product[]>> {
  const url = pathBuilder(backendRoutes.products.search, { search: value });
  const res = await fetch(url, {
    method: "GET",
  });

  if (!res.ok) return handleApiServerError(res);
  return buildApiResponseAsync(res.json());
}

export async function getProduct(id: number): Promise<ApiResponse<Product>> {
  const url = pathBuilder(backendRoutes.products.delete, { id: id.toString() });
  const res = await fetch(url, {
    method: "GET",
  });

  if (!res.ok) return handleApiServerError(res);
  return buildApiResponseAsync(res.json());
}

export async function deleteProduct(
  id: number
): Promise<ApiResponse<Product[]>> {
  const url = pathBuilder(backendRoutes.products.delete, { id: id.toString() });
  console.log(url);

  const res = await fetch(url, {
    method: "DELETE",
  });

  if (!res.ok) return handleApiServerError(res);
  return buildApiResponseAsync(res.json());
}

export async function createProduct(
  newProduct: Product
): Promise<ApiResponse<Product>> {
  const response = await fetch(backendRoutes.products.create, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(newProduct),
  });

  if (!response.ok) return handleApiServerError(response);
  return buildApiResponseAsync(response.json());
}

export async function updateProduct(
  product: Product
): Promise<ApiResponse<Product>> {
  const response = await fetch(backendRoutes.products.update, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(product),
  });

  if (!response.ok) return handleApiServerError(response);
  return buildApiResponseAsync(response.json());
}
