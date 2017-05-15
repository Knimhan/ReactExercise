import React, { Component, PropTypes } from 'react';
import styles from './FriendListApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as FriendsActions from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';

export default class FriendListApp extends Component {

  render () {
    const { friendlist: { friendsById }, dispatch } = this.props;
    const actions = bindActionCreators(FriendsActions, dispatch);

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendsById} actions={actions} />
      </div>
    );
  }
}


function select(state) {
  return {
    friendlist: state.friendlist
    }
}

FriendListApp.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(select)(FriendListApp)
