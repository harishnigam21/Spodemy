import pullUser from "../../usefullFunction/directuser";
import { useParams } from "react-router-dom";
const Signout = () => {
  const params = useParams();
  const emailenc = params.email;
  const signouturl = `${process.env.REACT_APP_BACKEND_HOST}/signout`;


  const responseMessage = async (response) => {
    const statusMessage = JSON.parse(JSON.stringify(await response.json()));
    alert(statusMessage.Message);
  };


  //pull User, who are not signed in
  pullUser(emailenc);


  //Making signed in user signed out
  const signedout = async () => {
    const response = await fetch(signouturl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials:'include'
    });
    if(response.ok){
        window.location.replace(`/`);
    }
    else{
        responseMessage(response);
    }
  };
  signedout();
  return (
    <></>
  );
};
export default Signout;
