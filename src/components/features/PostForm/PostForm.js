import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

const PostForm = ({header, action, ...props}) => {
    const [title, setTitle] = useState(props.title ?? '');
    const [author, setAuthor] = useState(props.author ?? '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate ?? '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription ?? '');
    const [content, setContent] = useState(props.content ?? '');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const props = {
            title,
            author,
            publishedDate,
            shortDescription,
            content,
        };
        action(props);
        navigate('/');
    }

    return (
        <Container className="col-8">
            <h1 className="m-5">{header}</h1>
            <Form className="">
                <Form.Group className="mt-2 col-8">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mt-2 col-8">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mt-2 col-8">
                    <Form.Label>Published</Form.Label>
                    <Form.Control type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label>Short description</Form.Label>
                    <Form.Control as="textarea" rows={3} value={shortDescription} onChange={(e) => setShortDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label>Main content</Form.Label>
                    <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)}/>
                </Form.Group>
                <Button className="mt-2" variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
            </Form>
        </Container>
    );
}

export default PostForm;