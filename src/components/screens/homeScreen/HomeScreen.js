import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoriesBar from '../../categoriesBar/CategoriesBar'
import Video from '../../video/Video'

const HomeScreen = () => {
    return (
        <Container>
            <CategoriesBar />
            <Row>
                {[...new Array(12)].map(() => (
                    <Col lg={3} md={4}>
                        <Video />
                    </Col>))}
            </Row>
        </Container>
    )
}

export default HomeScreen
