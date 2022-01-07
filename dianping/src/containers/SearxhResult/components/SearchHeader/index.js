import React, { Component } from 'react';
import "./style.css"

class SearchHeader extends Component {
  render() {
    const { onBack, onSearch } = this.props;
    return (
      <div className='searchHeader'>
        <div className='searchHeader__back' onClick={onBack}></div>
        <div className='searchHeader__list'>
          <dspan className='searchHeader__item searchHeader__item--selected'>商户</dspan>
          <span className='searchHeader__item'>闪惠特购</span>
        </div>
        <div className='searchHeader__icon' onClick={onSearch}></div>
      </div>
    );
  }
}

export default SearchHeader;