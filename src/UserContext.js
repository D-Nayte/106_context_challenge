import React, { createContext, useState } from "react";

export const UserContext = createContext(); // YOUR CODE HERE

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [name, setName] = useState("William");
  const [location, setLocation] = useState("Mars");

  return (
    <UserContext.Provider
      value={{
        name: name,
        setName: setName,
        location: location,
        setLocation: setLocation,
      }}>
      {children}
    </UserContext.Provider>
  );
};
