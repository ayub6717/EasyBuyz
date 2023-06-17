import { baseApi } from "../../utils/base";

export const subCategoriesApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getSubCategories: build.query({
			query: (id) => `user/categories/sub-category/${id}`,
		}),
	}),
    overrideExisting: false,
});

export const { useGetSubCategoriesQuery } = subCategoriesApi;


