import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategories, pickCategory } from '../actions';

export class App extends Component {
  componentDidMount() {
    if (!this.props.categories.length) {
      fetch('http://jservice.io/api/categories?count=20')
        .then((resp) => resp.json())
        .then((json) => this.props.setCategories(json));
    }
  }

  render() {
    return (
      <div>
        <h2>Jeopardy!</h2>
        {this.props.categories.map((category) => (
          <div key={category.id}>
            <Link
              to="/category"
              onClick={() => this.props.pickCategory(category)}
            >
              <h4>{category.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { categories: state.categories };
};
export default connect(mapStateToProps, { setCategories, pickCategory })(App);
