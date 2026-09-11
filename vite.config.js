export default {
  server: {
    proxy: {
      "/api": "http://localhost:8561", // Make sure this port matches the one in server.js
    },
  },
};
