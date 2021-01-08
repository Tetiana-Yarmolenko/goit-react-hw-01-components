import React from "react";
import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  if (friends.length === 0) return;
  return <ul className={s.list}>{friends.map(FriendListItem)}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
