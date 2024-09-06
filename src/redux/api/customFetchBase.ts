import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

const baseUrl = "https://soal.staging.id/";

const baseQuery = fetchBaseQuery({
  baseUrl,
});

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const tokenType = localStorage.getItem("token_type");
  const accessToken = localStorage.getItem("access_token"); // Sesuaikan

  if (typeof args === "object" && args !== null && "url" in args) {
    const headers = new Headers();

    if (tokenType) {
      headers.set("Authorization", `${tokenType} ${accessToken}`);
    }

    if (args.url === "/" || args.url === "/home") {
      headers.set("Authorization", `${tokenType} ${accessToken}`);
    }

    const result = await baseQuery({ ...args, headers }, api, extraOptions);
    return result;
  } else {
    throw new Error("Invalid arguments provided");
  }
};

export default customFetchBase;
