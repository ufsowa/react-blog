import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../Redux/postsReducer.js';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Post from '../../features/Post/Post.js';

const Home = () => {
    const posts = useSelector(getAllPosts)

    return (
        <>
            <div className="d-flex justify-content-between mb-5">
                <h1>All posts</h1>
                <Link to={"/post/add/"} className="col-4 col-md-2 text-center">
                    <Button className="my-2 w-100" variant="btn btn-outline-primary">Add post</Button>
                </Link>
            </div>
            <Container className="d-flex justify-content-center row">
                {posts.map(post => <Post key={post.id} {...post} />)}
            </Container>
        </>
    );
}

export default Home;