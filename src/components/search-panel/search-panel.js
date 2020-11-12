import React from 'react'
import './search-panel.css'

const SerachPanel = () => {

    const searchText = 'Type here to search';
    const searchStyle= {
      fontSize:'25px'
    };
    return (<input
      style={searchStyle}
      placeholder = {searchText}/>);
  
  }
  export default SerachPanel