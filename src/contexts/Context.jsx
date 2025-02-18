import React from "react";
import { createContext, useContext, useState } from "react";
import StorageData from "../helper/storagehelper/StorageData";

const userContext = createContext();
const ContextWrapper = ({ children }) => {
  const myuserToken = StorageData.getToken(); 
  const myUserRefreshToken = StorageData.getRefreshToken(); 
  const myuserData = StorageData.getUserData();
  const loggedInUserId = StorageData.getUserData()?._id;
  const userType=myuserData?.userType
  const [token, setToken] = useState(myuserToken ? myuserToken : "");
  const [refreshToken, setRefreshToken] = useState(myUserRefreshToken ? myUserRefreshToken : "");
  const [userData, setUserData] = useState(
    myuserData != null ? myuserData : {}
  );

  return (
    <userContext.Provider
      value={{
        token,
        setToken,
        userData,
        setUserData,
        refreshToken, 
        setRefreshToken,
        loggedInUserId,
        userType
      }}
    >
      {children}
    </userContext.Provider>
  );
};


const customContext = () => {
  return useContext(userContext);
};
export default customContext;
export { ContextWrapper };
