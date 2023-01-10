
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://63bc160efa38d30d85bb17d3.mockapi.io',}),
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


    

// export const contactSlice = createSlice({
//     name: 'contacts',
//     initialState: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     reducers: {
//         addContact: {
//             reducer(state, action) { state.push(action.payload) },
//             prepare: (name, number) => ({
//             payload: {
//                 id: nanoid(),
//                 name,
//                 number,
//             }
//         }),
//         },
    
//         deleteContact(state, action) {
//             return state.filter(i => i.id !== action.payload)
//         },
//     }
// });

// export const { deleteContact, addContact } = contactSlice.actions;

