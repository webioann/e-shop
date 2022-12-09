import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IProduct } from "../types/fakeStoreApi.types";

export const fakeStoreApi = createApi({
    reducerPath: 'fakeStoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),
    endpoints: builder => ({
        fetchProducts: builder.query<IProduct[], string>({
            query: () => ({ url: '/products' })
        }),
        // coinDetails: builder.query<coinDetailsType, string | undefined>({
        //     query: (id: string ) => ({
        //         url: `/coins/${id}`,
        //     }),
        // }),
        // searchCoins: builder.query<CoinsSearchType[], string>({
        //     query: (searchCoin: string) => ({
        //         url: `/search?query=${searchCoin}`,
        //     }),
        //     transformResponse: (respons: CoinsSearchData) => respons.coins,
        // })
    }), 
})

export const { useFetchProductsQuery } = fakeStoreApi;
