import { baseApi } from "../../utils/base";

export const categoriesApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getTopCategories: build.query({
			query: () => `user/categories/top?status=Active`,
		}),
	}),
    overrideExisting: false,
});

export const { useGetTopCategoriesQuery } = categoriesApi;

