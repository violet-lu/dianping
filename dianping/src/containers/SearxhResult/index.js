import React, { Component } from 'react';
import ShopList from './components/ShopList';
import SearchHeader from './components/SearchHeader';
import KeywordBox from './components/KeywordBox';

class SearchResult extends Component {
  render() {
    return (
      <div>
        <SearchHeader/>
        <KeywordBox/>
        <ShopList/>
      </div>
    );
  }
}

export default SearchResult;