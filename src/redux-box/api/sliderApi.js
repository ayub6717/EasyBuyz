import { baseApi } from "./base";

export const sliderApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getSliders: build.query({
			query: () => `sliders`,
		}),
	}),
    overrideExisting: false,
});

export const { useGetSlidersQuery } = sliderApi;
