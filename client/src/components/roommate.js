import React, { Component } from "react";
import axios from "axios";
import AddBookBtn from "../../components/AddBookBtn";
import { Row, Col } from "../../components/Grid";
import { BookList, BookListItem } from "../../components/BookList";
import EmptyList from "../../components/EmptyList";

render() {
    return (
      <Row>
        <Col size="md-12">
        <div>
          <input id="bookQ" className="form-control form-control-lg" autoComplete="off" type="text" name="query" onChange={this.handleInput} />