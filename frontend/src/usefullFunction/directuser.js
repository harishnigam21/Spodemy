const pulluserurl = `${process.env.REACT_APP_BACKEND_HOST}/directuser`;
//pull User, who are not signed in
const pullUser = async (emailenc) => {
  const response = await fetch(pulluserurl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ emailenc }),
  });
  if (!response.ok) {
    window.location.replace("/signin");
  }
};
export default pullUser;
