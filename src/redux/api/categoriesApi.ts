import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { MenuResponse } from "../../types";

const values = {
  show_all: 1,
};

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: customFetchBase,
  tagTypes: ["Categories"],
  endpoints: (builder) => ({
    getCategories: builder.mutation<MenuResponse, void>({
      query() {
        return {
          url: "api/menu",
          method: "POST",
          body: values,
        };
      },
    }),
  }),
});

export const { useGetCategoriesMutation } = categoriesApi;
