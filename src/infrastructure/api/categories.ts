"use server";

import { api } from "./api";

export const getCategories = async () => {
  const res = await api.get("/category");
  if (res.status !== 200) {
    throw new Error("Failed to fetch categories");
  }
  return res.data;
};
