import { Product } from "./types";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch("http://back:3000/products", {
    cache: "no-store",
  });
  return response.json();
};
