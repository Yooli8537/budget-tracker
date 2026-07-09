export default {
  server: {
    proxy: {
      "/backend": "http://localhost:8561", // Make sure this port matches the one in server.js
    },
    port: 8560,
  },
};
