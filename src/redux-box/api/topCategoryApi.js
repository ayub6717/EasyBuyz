// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseUrl = process.env.REACT_APP_API_BASE_URL;

// export const categoryApi = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getTopCategories: builder.query({
//       query: () => 'user/categories/top',
//     }),
//   }),
// });
// export const { useGetTopCategoriesQuery } = categoryApi;


import { baseApi } from "./base";

export const categoriesApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getTopCategories: build.query({
			query: () => `user/categories/top`,
		}),
	}),
    overrideExisting: false,
});

export const { useGetTopCategoriesQuery } = categoriesApi;

