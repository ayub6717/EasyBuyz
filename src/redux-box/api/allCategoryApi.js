import { baseApi } from "../../utils/base";

export const allCategoriesApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getAllCategories: build.query({
			query: () => `user/categories/all`,
		}),
	}),
    overrideExisting: false,
});

export const { useGetAllCategoriesQuery } = allCategoriesApi;

