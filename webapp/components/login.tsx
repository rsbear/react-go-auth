import React, { FC, useState } from "react";
import useForm from "../hooks/useForm";
import { Wrapper, FlexForm, Input } from "../styles/main";
import {
  useCreateLoginAuthMutation,
  useLoginMutation
} from "../generated/graphql";

const initialValues = {
  email: "",
  secret: ""
};

const Login: FC<any> = () => {
  const [values, handleChange] = useForm(initialValues);
  const [tokenSent, setTokenSent] = useState(false);
  const [createLoginAuth] = useCreateLoginAuthMutation();
  const [login] = useLoginMutation();

  async function handleGenerateAuth(values) {
    event.preventDefault();
    try {
      const res = await createLoginAuth({
        variables: {
          email: values.email
        }
      });
      console.log(res);
      setTokenSent(true);
    } catch (err) {
      //fail gracefully
    }
  }

  async function handleLogin(values) {
    event.preventDefault();
    console.log(` values ${values}`);
    try {
      const res = await login({
        variables: {
          secret: values.secret,
          email: "client@client.com"
        }
      });
      console.log(res);
    } catch (err) {
      // fail smooth
    }
  }

  return (
    <Wrapper>
      <h3> Login</h3>
      {!tokenSent ? (
        <FlexForm onSubmit={() => handleGenerateAuth(values)}>
          <Input
            type="text"
            placeholder="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <button type="submit">Get Token</button>
        </FlexForm>
      ) : (
        <FlexForm onSubmit={() => handleLogin(values)}>
          <Input
            type="text"
            placeholder="magic word"
            name="secret"
            value={values.secret}
            onChange={handleChange}
          />
          <button type="submit">log in</button>
        </FlexForm>
      )}
    </Wrapper>
  );
};

export default Login;
