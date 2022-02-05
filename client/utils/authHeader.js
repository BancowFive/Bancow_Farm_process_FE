export default function authHeader() {
  const token = JSON.parse(localStorage.getItem("token"));

  if (token && token.accessToken) {
    return { Authorization: token.accessToken };
  } else {
    return {};
  }
}
