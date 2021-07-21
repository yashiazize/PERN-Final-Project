export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3333"
    : "https://glacial-lowlands-84807.herokuapp.com";
};
