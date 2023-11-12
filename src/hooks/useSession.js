import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isAuth } from "../middlewares/ProtectedRoutes";

const useSession = () => {
  const session = isAuth();
  //This function decodes the token for make it readable
  const decodedSession = session ? jwtDecode(session) : null;

  const navigate = useNavigate();

  //This function checks if the token has expired and if it has expired it clears the local storage
  const checkTokenExpirationTime = () => {
    if (decodedSession && decodedSession.exp) {
      const convertUnixDateToMillisecond = decodedSession.exp * 1000;
      const expirationDate = new Date(convertUnixDateToMillisecond);
      const currentDate = new Date();

      if (expirationDate < currentDate) {
        localStorage.clear();
      }
    }
  };

  //After the component is mounted, it checks if the session exists and if it does not exist it redirects to the login page
  useEffect(() => {
    if (!session) {
      navigate("/", { replace: true });
    }
    checkTokenExpirationTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, session]);

  return decodedSession;
};

export default useSession;
