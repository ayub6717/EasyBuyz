import { baseApi } from "../../utils/base";

export const featuredApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getFeatured: build.query({
			query: () => `/user/products?page=2`,
		}),
	}),
    overrideExisting: false,
});

export const { useGetFeaturedQuery } = featuredApi;

