import { createContext } from "react";

/**
 * A custom data type for `AuthContext` context.
 */
export interface AuthData {
  user: any;
  logIn: (user: any) => void;
  logOut: () => void;
}

/**
 * The `AuthContext` context for authentication.
 */
const AuthContext = createContext<AuthData>({
  user: null,
  logIn: (user: any) => {},
  logOut: () => {},
});

export default AuthContext;
