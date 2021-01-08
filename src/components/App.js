import React from "react";

import Container from "./Container";
import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendsList";
import TransactionHistory from "./TransactionHistory";

import userData from "../data/user.json";
import statsData from "../data/statistical-data.json";
import friends from "../data/friends.json";
import transaction from "../data/transactions.json";

const App = () => {
  return (
    <Container>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics items={statsData} />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transaction} />
    </Container>
  );
};

export default App;
