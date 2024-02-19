import { useDispatch } from "react-redux";
import PostForm from "../../features/PostForm/PostForm";
import { addPost } from '../../../Redux/postsReducer.js';
const AddPost = () => {
    const dispatch = useDispatch();
    const handleAddPost = (postData) => {
        console.log('Add post: ', postData);
        dispatch(addPost(postData));
    };

    const props = {
        header: 'Add post',
        action: handleAddPost,
    };
    return (
        <PostForm {...props}/>
    );
}

export default AddPost;