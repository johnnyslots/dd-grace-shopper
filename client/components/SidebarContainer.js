import React, { Component } from 'react';
import { connect } from 'react-redux';
import {SidebarLeft} from './Sidebar';
import {selectFilter, deselectFilter, resetSidebar} from '../store/sidebarFilter';

const mapState = state => {
  return {
    visible: state.sidebarReducer,
    products: state.products.products,
    productsById: state.products.productsById,
    filter: state.filterReducer
  }
}

const mapDispatch = dispatch => {
  return {
    handleChange: function(evt) {
      if(evt.target.checked) {
        dispatch(selectFilter(evt.target.value))
      }
      else {
        dispatch(deselectFilter(evt.target.value))
      }
    },
    handleClick: function(evt) {
      evt.preventDefault();
      console.log(evt)
      dispatch(resetSidebar());
    }
  }
}

export default connect(mapState, mapDispatch)(SidebarLeft);
