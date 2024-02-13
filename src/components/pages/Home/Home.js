import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../Redux/postsReducer.js';
import { Container } from 'react-bootstrap';

import Post from '../Post/Post.js';

const Home = () => {
    const posts = useSelector(getAllPosts)

    return (
        <>
            <h1>All posts</h1>
            <Container className="d-flex justify-content-center row">
                {posts.map(post => <Post key={post.id} {...post} />)}
            </Container>
        </>
    );
}

export default Home;