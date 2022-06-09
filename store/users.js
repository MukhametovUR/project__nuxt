export const state = () => ({
  users: [
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
    { id: 3, name: "User3" },
  ],
});

export const getters = {
    getUsers: state => state.users
}