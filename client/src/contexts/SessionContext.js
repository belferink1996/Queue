import { createContext, useState } from 'react';

export const SessionContext = createContext();

export const SessionProvider = (props) => {
  const [session, setSession] = useState({
    _id: null,
    host: null,
    users: [],
    queue: [],
    history: [],
  });

  const logoutSession = () => {
    setSession({
      _id: null,
      host: null,
      users: [],
      queue: [],
      history: [],
    });
  };

  return (
    <SessionContext.Provider value={{ session, setSession, logoutSession }}>
      {props.children}
    </SessionContext.Provider>
  );
};
