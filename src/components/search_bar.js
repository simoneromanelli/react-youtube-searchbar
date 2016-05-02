import React, { Component } from 'react';

// Functional components
// const SearchBar = () => {
//
// }

// Class-based component beacause we need that this component have the ability
// to comminucate with other components and not only render some JSX.
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'kitesurf' };
  }

  onInputChange(term){
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }
}


export default SearchBar;
