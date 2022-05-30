import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { AuthConsumer } from "../comps/Auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Layout from "../comps/layout/Layout";
import type { AuthData } from "../lib/useAuth";
import type { FormEventHandler, ReactElement } from "react";

interface LoginState {
  showPwd: boolean;
}

/**
 * The `Login` functional component which is
 * a page for the `/login` route.
 * @example
 * ```tsx
 * <Login />
 * ```
 * @returns The `Login` component skeleton.
 */
const Login = (): ReactElement => {
  const navigate = useNavigate();

  const [state, setState] = useState<LoginState>({
    showPwd: false,
  });

  const showPassword: FormEventHandler = () => {
    setState({
      showPwd: !state.showPwd,
    });
  };

  return (
    <Layout>
      <Container
        sx={{
          display: "flex",
          pt: "2rem",
        }}
      >
        <Box
          component="form"
          sx={{
            width: { xs: "100%", md: "35%" },
            "& > .MuiFormControl-root": { mb: 3, width: "100%" },
            border: "2px solid grey",
            borderColor: "primary.main",
            borderRadius: 8,
            mx: "auto",
            p: "2rem",
          }}
        >
          <TextField
            id="email"
            label="Email"
            placeholder="you@youremailserviceprovider.com"
            required
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel htmlFor="pwd1" required>
              Password
            </InputLabel>
            <Input
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={showPassword}
                    edge="end"
                  >
                    {state.showPwd ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              id="pwd1"
              name="password1"
              type={state.showPwd ? "text" : "password"}
              placeholder="secret"
            />
          </FormControl>
          <AuthConsumer>
            {(value: AuthData) => {
              return (
                <Button
                  color="primary"
                  onClick={() => {
                    value.logIn("lol");
                    navigate("/home");
                  }}
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
              );
            }}
          </AuthConsumer>
        </Box>
      </Container>
    </Layout>
  );
};

export default Login;
