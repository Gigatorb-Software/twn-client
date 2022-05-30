import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../lib/useAuth";
import type { AuthData } from "../lib/useAuth";
import type { ReactChild, ReactConsumerChild } from "../shared/types";
import type { ReactElement } from "react";

/**
 * The `AuthProvider` functional component is a
 * wrapper around `AuthContext.Provider` component.
 * @example
 * ```tsx
 * <AuthProvider>...</AuthProvider>
 * ```
 * @param props - sdlfksdjf
 * @returns The `AuthProvider` component skeleton.
 */
export const AuthProvider = (props: ReactChild): ReactElement => {
  const [user, setUser] = useState<any>(null);
  const logIn = (user: any) => {
    setUser(user);
  };
  const logOut = () => {
    setUser(null);
  };
  const authData: AuthData = { user: user, logIn, logOut };
  return (
    <AuthContext.Provider value={authData}>
      {props.children}
    </AuthContext.Provider>
  );
};

/**
 * The `AuthConsumer` functional component is a
 * wrapper around `AuthContext.Consumer` component.
 * @example
 * ```tsx
 * <AuthConsumer>...</AuthConsumer>
 * ```
 * @param props - The properties.
 * @returns The `AuthConsumer` component skeleton.
 */
export const AuthConsumer = (props: ReactConsumerChild): ReactElement => {
  return <AuthContext.Consumer>{props.children}</AuthContext.Consumer>;
};

/**
 * The `AuthRequired` functional component is a wrapper
 * component which checks for the authentication.
 * @example
 * ```tsx
 * <AuthRequired>...</AuthRequired>
 * ```
 * @param props - The properties.
 * @returns The `AuthRequired` component skeleton.
 */
export const AuthRequired = (props: ReactChild): ReactElement => {
  let location = useLocation();
  return (
    <AuthConsumer>
      {(value: AuthData) => {
        if (!value.user) {
          // Redirect the user to /login but save the current url location.
          return <Navigate to="/login" state={{ from: location }} replace />;
        }
        return props.children;
      }}
    </AuthConsumer>
  );
};
