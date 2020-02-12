import React, { FC, useState, useReducer } from "react";
import { Wrapper, flex, FlexForm, Input } from "../styles/main";
import { useSignupMutation } from "../generated/graphql";

const initialState = {
  email: "",
  username: ""
};

const reducer = (state: any, { field, value }: any) => {
  return { ...state, [field]: value };
};

const Signup: FC<any> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [signup] = useSignupMutation();

  function handleChange(e) {
    dispatch({ field: e.target.name, value: e.target.value });
  }

  async function handleSubmit() {
    event.preventDefault();
    try {
      const res = await signup({
        variables: {
          input: {
            username: state.username,
            email: state.email
          }
        }
      });
      console.log(res);
    } catch (err) {
      //fail gracefully
    }
  }

  return (
    <Wrapper>
      <h1>Sign up</h1>
      <FlexForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          value={state.email}
          placeholder="Email"
          onChange={e => handleChange(e)}
        />
        <Input
          type="text"
          name="username"
          value={state.username}
          placeholder="Username"
          onChange={e => handleChange(e)}
        />
        <button type="submit">Get Token</button>
      </FlexForm>
    </Wrapper>
  );
};

export default Signup;
