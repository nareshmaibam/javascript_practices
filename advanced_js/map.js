const friends = ["naResh", "sanjit", "ashish", "akshay", "Kanglu", "alem"];
const myFriends = ["deepak", "alem", "malem", "Naresh", "kanglu", "sanjit"];
let newFriends = [];
let mutualFriends = [];

// console.log(friends)
// console.log(friends[0]);

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

friends.map((friendName, friendIndex) => {
  if (friendName.toLocaleLowerCase() === "Naresh".toLocaleLowerCase()) {
    newFriends.push(friendName.toLocaleUpperCase());
  }
  //   console.log(friendIndex);
  //   console.log(friendName);
});

myFriends.forEach((myFriend) => {
  friends.forEach((friend) => {
    if (myFriend.toLowerCase() === friend.toLocaleLowerCase()) {
      mutualFriends.push(friend.toLocaleLowerCase());
    }
  });
});

console.log(mutualFriends);
// console.log(newFriends);
