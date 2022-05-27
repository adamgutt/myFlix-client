import React, { useState, useEffect } from "react";
import { Button, Col, Row, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./profile-view.scss";
import axios from "axios";
import UserInfo from './user-info';
import FavoriteMovies from './favorite-movies';
import UpdateUser from './update-user';








return (
  <Container>
    <Row>
      <Col xs={12} sm={4}>
        <Card>
          <Card.Body>
            <UserInfo name={user.Username} email={user.Email} />
          </Card.Body>
        </Card   
        </Col>

      <Col xs={12} sm={8}>
        <Card>
          <Card.Body>
            <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <FavoriteMovies favoriteMovieList={favoriteMovieList} />

  </Container>
);
}  