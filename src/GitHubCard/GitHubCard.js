import React from "react"
import Card from 'react-bootstrap/Card'
import Img from './phuong.png'

function GitHubCard() {
    return (
        <div className="GitHubInfo">
            <Card style={{ width: '20rem', padding: "5rem"}}>
                <Card.Img variant="top" src={Img} style={{width: "50%"}}/>
                <Card.Body>
                    <Card.Title>YPhuong15</Card.Title>
                    <Card.Text>My name is Phuong Tran Yen Tong,
                        and I am learning React </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default GitHubCard;

