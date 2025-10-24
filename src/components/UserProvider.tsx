import { createContext, useContext, useState, type ReactNode } from "react";
import type { User } from './../types/User.ts';

const UserContext = createContext<User | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user] = useState<User>({
    id: "123",
    username: "NewUser",
    balance: 0,
    earnings: 0,
    totalInvested: 0
  });

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
