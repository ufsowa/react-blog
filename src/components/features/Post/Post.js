import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Post = ({id, title, shortDescription, content, author, publishedDate }) => {
    return (
        <Card className="m-2 col-md-5">
            <Card.Body className="d-flex justify-content-between flex-column">
                <div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2"><b>Author:</b> {author}</Card.Subtitle>
                    <Card.Subtitle className="mb-2"><b>Published:</b> {publishedDate} </Card.Subtitle>
                </div>
                <Card.Text className="text-wrap">{shortDescription}</Card.Text>
                <Link to={"/post/" + id}><Button variant="primary">Read more</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default Post;