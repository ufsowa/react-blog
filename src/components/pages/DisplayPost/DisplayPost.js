import { useParams } from 'react-router';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostById, deletePostById } from '../../../Redux/postsReducer.js';
import { Container, Button } from 'react-bootstrap';
import CustomModal from '../../features/Modal/Modal.js';

const DisplayPost = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const postData = useSelector((state) => getPostById(state, id));
    const [modal, setModal] = useState(false);

    const showModal = (event) => {
        event.preventDefault();
        setModal(true);
    }
    const removePost = () => {
        console.log('remove');
        dispatch(deletePostById(id));
        setModal(false);   
      };

    if(!postData) return <Navigate to="/" />
    else return (
        <>
        <Container className="d-flex m-0 px-5 row justify-content-center">
        <div className="col-sm-7 col-lg-5">
            <h1 className="mb-4">{postData.title}</h1>
            <h5> <b>Author: </b> {postData.author}</h5>
            <h5> <b>Published: </b> {postData.publishedDate}</h5>
            <article>
                {postData.content}
            </article>
        </div>
        <div className="col-sm-5 col-md-4 mt-3">
        <div className=" d-flex gap-2 justify-content-center"> 
            <Link to={"/post/edit/" + id} className="col-5">
                <Button className="w-100" variant="btn btn-outline-primary">Edit</Button>
            </Link>
            <Link onClick={showModal}  className="col-5">
                <Button className="w-100" variant="btn btn-outline-danger" >Delete</Button>
            </Link>
        </div>
        </div>
        </Container>
        <CustomModal modalStatus={modal} closeModal={setModal} action={removePost}/>
        </>
    );
}

export default DisplayPost;