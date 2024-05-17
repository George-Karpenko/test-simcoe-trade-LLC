import { Product } from "@/@types";
import initNewHttp from "./http";

const http = initNewHttp();
const namespace = "products/";

export const createProducts = async (products: Product[]) => {
  const { data } = await http.post(namespace, products);
  return data;
};
