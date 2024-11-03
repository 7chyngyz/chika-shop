// import { api as index } from "..";

// const api = index.injectEndpoints({
//   endpoints: (builder) => ({
//     getFavourites: builder.query<
//       FAVOURITE.GetFavouriteResponse,
//       FAVOURITE.GetFavouriteRequest
//     >({
//       query: () => ({
//         url: `/featured`,
//         method: "GET",
//       }),
//       providesTags: ["favourites"],
//     }),
//     addFavourite: builder.mutation<
//       FAVOURITE.AddFavouriteResponse,
//       FAVOURITE.AddFavouriteRequest
//     >({
//       query: (product) => ({
//         url: "/featured",
//         method: "POST",
//         body: product,
//       }),
//       invalidatesTags: ["favourites"],
//     }),
//     removeFavourite: builder.mutation<void, string>({
//       query: (id) => ({
//         url: `/featured/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["favourites"],
//     }),
//   }),
// });

// export const {
//   useGetFavouritesQuery,
//   useAddFavouriteMutation,
//   useRemoveFavouriteMutation,
// } = api;
