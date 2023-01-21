
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuthHeader } from './Auth/authOperetions';



export const contactsApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com/', authorization: setAuthHeader()}),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        fetch: builder.query({
            query: () => '/contacts',
            providesTags: ['Contacts'],
        }),
        addContact: builder.mutation({
      query: data => ({
        url: `/contacts`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    })
});

export const { useFetchQuery,useAddContactMutation,useDeleteContactMutation } = contactsApi;


    
