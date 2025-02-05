import React from "react";
import { useNavigate } from "react-router-dom";
import { UserProvider } from "./UserContext";

const UserProviderWrapper = ({ children }) => {
    const navigate = useNavigate(); // useNavigate inside a component

    return <UserProvider navigate={navigate}>{children}</UserProvider>;
};

export default UserProviderWrapper;