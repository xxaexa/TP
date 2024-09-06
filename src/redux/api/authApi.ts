import { createApi } from "@reduxjs/toolkit/query/react";
import { AuthRequest, AuthResponse } from "../../types";
import customFetchBase from "./customFetchBase";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    loginUser: builder.mutation<AuthResponse, AuthRequest>({
      query(values) {
        return {
          url: "oauth/token",
          method: "POST",
          body: values,
        };
      },
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          // Handle error (opsional)
        }
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
