import { ActionTypes } from "../actionTypes/actionTypes";

const initialState = {
    posts: [
        {
            id: 1,
            image: "image1",
            title: "Nigeria would be great again",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus in metus. Id venenatis a condimentum vitae. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Etiam dignissim diam quis enim. Risus in hendrerit gravida rutrum quisque non tellus orci. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Sit amet venenatis urna cursus eget nunc. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Diam vel quam elementum pulvinar. Mi proin sed libero enim sed. Egestas maecenas pharetra convallis posuere morbi leo urna. Pellentesque id nibh tortor id aliquet lectus proin nibh. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Tortor condimentum lacinia quis vel eros donec. Erat velit scelerisque in dictum non consectetur a erat nam.",
            category: "Politics",
            date: "August 3rd, 2021",
            views: 200,
            likes: 5,
            comments: 6,
            shares: 4,
            viewCount: 10000000,
        },
        {
            id: 2,
            image: "image2",
            title: "Trending in Nigerian Music",
            body: "Eget nulla facilisi etiam dignissim diam quis. Rhoncus urna neque viverra justo nec ultrices. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Auctor eu augue ut lectus. Egestas erat imperdiet sed euismod nisi porta lorem. Scelerisque purus semper eget duis at tellus at. Amet tellus cras adipiscing enim eu. Urna duis convallis convallis tellus id interdum velit. Lacus vel facilisis volutpat est velit egestas dui. At elementum eu facilisis sed odio morbi quis commodo odio. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. At elementum eu facilisis sed. Posuere ac ut consequat semper. Aliquam faucibus purus in massa tempor nec feugiat. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Parturient montes nascetur ridiculus mus.",
            category: "Entertainment",
            date: "July 8th, 2021",
            views: 3000,
            likes: 5,
            comments: 50,
            shares: 4,
            viewCount: 20000000,
        },
        {
            id: 3,
            image: "image3",
            body: "Ipsum dolor sit amet consectetur adipiscing elit. Tellus in hac habitasse platea dictumst. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Blandit turpis cursus in hac habitasse platea dictumst quisque. Consectetur purus ut faucibus pulvinar elementum integer enim. Vel pharetra vel turpis nunc. Duis at tellus at urna condimentum mattis pellentesque id nibh. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Tincidunt augue interdum velit euismod in pellentesque massa placerat. A erat nam at lectus urna duis convallis convallis. Eget est lorem ipsum dolor sit amet consectetur. Vel pharetra vel turpis nunc eget lorem dolor sed. Sapien pellentesque habitant morbi tristique senectus. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Accumsan lacus vel facilisis volutpat est velit egestas. Vel risus commodo viverra maecenas accumsan lacus. Eros in cursus turpis massa tincidunt dui.",
            title: "Nutition and balance Diet",
            category: "Nutrition",
            date: "June 1st, 2021",
            views: 250,
            likes: 5,
            comments: 40,
            shares: 4,
            viewCount: 30000000,
        },
        {
            id: 4,
            image: "image3",
            body: "Ipsum dolor sit amet consectetur adipiscing elit. Tellus in hac habitasse platea dictumst. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Blandit turpis cursus in hac habitasse platea dictumst quisque. Consectetur purus ut faucibus pulvinar elementum integer enim. Vel pharetra vel turpis nunc. Duis at tellus at urna condimentum mattis pellentesque id nibh. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Tincidunt augue interdum velit euismod in pellentesque massa placerat. A erat nam at lectus urna duis convallis convallis. Eget est lorem ipsum dolor sit amet consectetur. Vel pharetra vel turpis nunc eget lorem dolor sed. Sapien pellentesque habitant morbi tristique senectus. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Accumsan lacus vel facilisis volutpat est velit egestas. Vel risus commodo viverra maecenas accumsan lacus. Eros in cursus turpis massa tincidunt dui.",
            title: "Nutition and balance Diet",
            category: "Nutrition",
            date: "June 1st, 2021",
            views: 250,
            likes: 5,
            comments: 35,
            shares: 4,
            viewCount: 13000000,
        },
        {
            id: 5,
            image: "image3",
            body: "Ipsum dolor sit amet consectetur adipiscing elit. Tellus in hac habitasse platea dictumst. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Blandit turpis cursus in hac habitasse platea dictumst quisque. Consectetur purus ut faucibus pulvinar elementum integer enim. Vel pharetra vel turpis nunc. Duis at tellus at urna condimentum mattis pellentesque id nibh. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Tincidunt augue interdum velit euismod in pellentesque massa placerat. A erat nam at lectus urna duis convallis convallis. Eget est lorem ipsum dolor sit amet consectetur. Vel pharetra vel turpis nunc eget lorem dolor sed. Sapien pellentesque habitant morbi tristique senectus. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Accumsan lacus vel facilisis volutpat est velit egestas. Vel risus commodo viverra maecenas accumsan lacus. Eros in cursus turpis massa tincidunt dui.",
            title: "Nutition and balance Diet",
            category: "Nutrition",
            date: "June 1st, 2021",
            views: 250,
            likes: 5,
            comments: 6,
            shares: 4,
            viewCount: 14000000,
        },
        {
            id: 6,
            image: "image3",
            body: "Ipsum dolor sit amet consectetur adipiscing elit. Tellus in hac habitasse platea dictumst. Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus. Blandit turpis cursus in hac habitasse platea dictumst quisque. Consectetur purus ut faucibus pulvinar elementum integer enim. Vel pharetra vel turpis nunc. Duis at tellus at urna condimentum mattis pellentesque id nibh. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Tincidunt augue interdum velit euismod in pellentesque massa placerat. A erat nam at lectus urna duis convallis convallis. Eget est lorem ipsum dolor sit amet consectetur. Vel pharetra vel turpis nunc eget lorem dolor sed. Sapien pellentesque habitant morbi tristique senectus. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Accumsan lacus vel facilisis volutpat est velit egestas. Vel risus commodo viverra maecenas accumsan lacus. Eros in cursus turpis massa tincidunt dui.",
            title: "Nutition and balance Diet",
            category: "Nutrition",
            date: "June 1st, 2021",
            views: 250,
            likes: 5,
            comments: 7,
            shares: 4,
            viewCount: 1900000,
        },
    ]
}

export const postReducer = ( state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.RETRIEVE_POSTS:
            return {...state, posts:payload}
        default:
            return state
    }

}