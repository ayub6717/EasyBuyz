import { baseApi } from "../../utils/base";

export const bestDealApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getProduct: build.query({
			query: () => `user/product-categorized/popularProducts`,
		}),
	}),
    overrideExisting: false,
});

export const { useGetProductQuery } = bestDealApi;

