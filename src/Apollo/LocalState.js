// Is it token at localstorage?
export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("token")) || false
};

// Set and change the token and value about isLoggedIn
export const resolvers = {
  Mutation: {
    userLogIn: async (_, { token }, { cache }) => {
      // Set the token at localstorage
      localStorage.setItem("token", token);
      // Chang the local state about isLoggedIn
      // cache.writeData({
      //   data: {
      //     isLoggedIn: true
      //   }
      // });
      window.location = "/";
      return null;
    },
    userLogOut: (_, __, { cache }) => {
      // Remove the token at localstorage
      localStorage.removeItem("token");
      // Chang the local state about isLoggedIn
      // cache.writeData({
      //   data: {
      //     isLoggedIn: false
      //   }
      // });
      window.location = "/";
      return null;
    }
  }
};
