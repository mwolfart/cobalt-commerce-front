"use server";

import { api } from "./api";

export const getProducts = async () => {
  const res = await api.get("/product");
  if (res.status !== 200) {
    throw new Error("Failed to fetch products");
  }
  return res.data;
};

export const getProductBySlug = async (slug: string) => {
  const res = await api.get(`/product/s/${slug}`);
  if (res.status !== 200) {
    throw new Error("Failed to fetch product");
  }
  return res.data;
};

export const getProductByCategory = async (category: string) => {
  const res = await api.get(`/product/category/${category}`);
  if (res.status !== 200) {
    throw new Error("Failed to fetch products by category");
  }
  return res.data;
};

export const getTopProducts = async () => {
  const res = await api.get(`/product/popular`);
  if (res.status !== 200) {
    throw new Error("Failed to fetch popular products");
  }
  return res.data;
};
