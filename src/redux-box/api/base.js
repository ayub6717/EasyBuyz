import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// baseQuery instance
const baseQuery = fetchBaseQuery({
	baseUrl: process.env.REACT_APP_API_BASE_URL, // you can import baseUrl from .env
});

export const baseApi = createApi({
	reducerPath: "splitApi",
	baseQuery: baseQuery,
	endpoints: () => ({}),
});
