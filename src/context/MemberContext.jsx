import { createContext, useState } from "react";

export const MemberContext = createContext(null);

function MemberContextProvider({ children }) {
  const [activeMember, setActiveMember] = useState("Kiin");
  return (
    <MemberContext.Provider value={{ activeMember, setActiveMember }}>
      {children}
    </MemberContext.Provider>
  );
}

export default MemberContextProvider;