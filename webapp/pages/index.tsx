import React, { FC, useMemo } from "react";
import Login from "../components/login";
import Signup from "../components/signup";
import { useUsersQuery } from "../generated/graphql";

const Landing: FC<any> = () => {
  const { loading, error, data } = useUsersQuery();
  const signupComponent = useMemo(() => <Signup />, []);
  const loginComponent = useMemo(() => <Login />, []);

  if (loading) {
    return <h2>loading...</h2>;
  }
  if (error) {
    console.log(error);
    return <h2>oops something went wrong</h2>;
  }
  return (
    <div>
      <h3> Welcome friends</h3>
      {signupComponent}
      {loginComponent}
      <div>
        {!loading && !error && data && data.users && (
          <div>
            {data.users.map((u: any, i: number) => (
              <h2 key={i}>{u.username}</h2>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
