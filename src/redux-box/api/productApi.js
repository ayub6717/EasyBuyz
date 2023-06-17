import { baseApi } from "../../utils/base";

export const productApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getProduct: build.query({
			query: () => `user/products`,
		}),
	}),
    overrideExisting: false,
});

export const { useGetProductQuery } = productApi;

