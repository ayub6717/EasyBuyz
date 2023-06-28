import { baseApi } from "../../utils/base";

export const keywordApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getKeyword: build.query({
			query: (keyword) => `user/products?keyword=${keyword}`,
		}),
	}),
    overrideExisting: false,
});

export const { useGetKeywordQuery } = keywordApi;

