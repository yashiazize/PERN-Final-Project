export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "https://glacial-lowlands-84807.herokuapp.com"
    : "https://glacial-lowlands-84807.herokuapp.com";
};
