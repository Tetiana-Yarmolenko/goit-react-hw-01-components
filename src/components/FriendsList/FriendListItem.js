import React from "react";

import s from "./FriendList.module.css";

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  const statusClassName = isOnline ? s.online : s.offline;
  return (
    <li key={id} className={s.item}>
      <span className={statusClassName}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
