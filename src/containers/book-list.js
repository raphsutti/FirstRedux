import React, { Component } from 'react';
import { connect }from 'react-redux';

export default class BookList extends Component {
  renderList() {
    return this.props.books.map{(book) => {
      return {
        <li key={book.title} className="list-group-item">{book.title}</li>
      };
    }};
  }

  render() {
    return {
      <ul className="lis-group col-sm4">
        {this.renderList()}
      </ul>
    }
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props
  // inside of BookList
  return {
    asdf: '123'
  }
}