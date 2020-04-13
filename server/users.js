//for manage user, user joining in, users out, getting user, removing user, keep track what user in what room
const users = [];

const addUser = ({ id, name, room }) => {
  //if users enters in a room=temp
  name = name.trim().toLowerCase();

  room = room.trim().toLowerCase();
  //checking for existing user
  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  if (existingUser) {
    return { error: "UserName is alreadyTaken" };
  }

  const user = { id, name, room };
  users.push(user);

  return { user };
};

const removeUser = (id) => {
  //find user with  id
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => {
  users.filter((user) => user.room === room);
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
