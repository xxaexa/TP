import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";
import { AccountResponse } from "../../types";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: customFetchBase,
  tagTypes: ["Home"],
  endpoints: (builder) => ({
    getAccount: builder.query<AccountResponse, void>({
      query() {
        return {
          url: "api/home",
          method: "Get",
        };
      },
    }),
  }),
});

export const { useGetAccountQuery } = homeApi;
