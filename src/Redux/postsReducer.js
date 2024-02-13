

// selectors
export const getAllPosts = ({posts}) => posts;
export const getPostById = ({posts}, id) => posts.find((post) => post.id === id);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE = createActionName('DELETE');
// action creators
export const deletePostById = payload => ({type: DELETE, payload}); 


const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case DELETE:
            return statePart.filter(post => post.id !== action.payload);
        default:
            return statePart;
    };
};

export default postsReducer;