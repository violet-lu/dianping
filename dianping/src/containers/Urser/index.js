import React, { Component } from 'react';
import OrderItem from './components/OrderItem';
import UserMain from './components/UserMain';
import UserHeader from './components/UserHeader'

class User extends Component {
  render() {
    return (
      <div>
        <UserHeader/>
        <UserMain/>
        <OrderItem/>
      </div>
    );
  }
}

export default User;