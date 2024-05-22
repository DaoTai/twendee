import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import env from "../../constants/environment";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: env.API_URI }),
  endpoints: (builder) => ({
    getListUser: builder.query<IListUserResponse, IQueryPaginate>({
      query: ({ page, results }: IQueryPaginate) => {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("results", String(results));
        return {
          url: `/?${params}`,
        };
      },
    }),
  }),
});

export const { useGetListUserQuery } = userApi;
