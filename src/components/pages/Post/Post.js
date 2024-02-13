import { Card, Button } from 'react-bootstrap';

const Post = ({id, title, shortDescription, content, author, publishedDate }) => {
    return (
        <Card className="m-2 col-md-5">
            <Card.Body >
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2"><b>Author:</b> {author}</Card.Subtitle>
                <Card.Subtitle className="mb-2"><b>Published:</b> {publishedDate} </Card.Subtitle>
                <Card.Text className="text-wrap">{shortDescription}</Card.Text>
                <Button variant="primary">Read more</Button>
            </Card.Body>
        </Card>
    );
}

export default Post;