import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Map: any,
  Any: any,
  Upload: any,
  Time: any,
};


export type Auth = {
   __typename?: 'Auth',
  id: Scalars['Int'],
  email: Scalars['String'],
  secret: Scalars['String'],
};


export type Mutation = {
   __typename?: 'Mutation',
  createLoginAuth: Response,
  deleteAuth: Response,
  deleteUser: Response,
  login: Response,
  signup?: Maybe<User>,
};


export type MutationCreateLoginAuthArgs = {
  email: Scalars['String']
};


export type MutationDeleteAuthArgs = {
  id: Scalars['Int']
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  secret: Scalars['String']
};


export type MutationSignupArgs = {
  input: NewUser
};

export type NewAuth = {
   __typename?: 'NewAuth',
  email: Scalars['String'],
};

export type NewUser = {
  email: Scalars['String'],
  username: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  auths?: Maybe<Array<Maybe<Auth>>>,
  users?: Maybe<Array<Maybe<User>>>,
};

export type Response = {
   __typename?: 'Response',
  success: Scalars['Boolean'],
  message?: Maybe<Scalars['String']>,
};



export type User = {
   __typename?: 'User',
  id: Scalars['Int'],
  email: Scalars['String'],
  username: Scalars['String'],
};

export type AuthsQueryVariables = {};


export type AuthsQuery = (
  { __typename?: 'Query' }
  & { auths: Maybe<Array<Maybe<(
    { __typename?: 'Auth' }
    & Pick<Auth, 'email' | 'secret'>
  )>>> }
);

export type CreateLoginAuthMutationVariables = {
  email: Scalars['String']
};


export type CreateLoginAuthMutation = (
  { __typename?: 'Mutation' }
  & { createLoginAuth: (
    { __typename?: 'Response' }
    & Pick<Response, 'success' | 'message'>
  ) }
);

export type LoginMutationVariables = {
  email: Scalars['String'],
  secret: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'Response' }
    & Pick<Response, 'success' | 'message'>
  ) }
);

export type SignupMutationVariables = {
  input: NewUser
};


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username' | 'email'>
  )> }
);

export type UsersQueryVariables = {};


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'email' | 'username'>
  )>>> }
);


export const AuthsDocument = gql`
    query Auths {
  auths {
    email
    secret
  }
}
    `;

/**
 * __useAuthsQuery__
 *
 * To run a query within a React component, call `useAuthsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AuthsQuery, AuthsQueryVariables>) {
        return ApolloReactHooks.useQuery<AuthsQuery, AuthsQueryVariables>(AuthsDocument, baseOptions);
      }
export function useAuthsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AuthsQuery, AuthsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AuthsQuery, AuthsQueryVariables>(AuthsDocument, baseOptions);
        }
export type AuthsQueryHookResult = ReturnType<typeof useAuthsQuery>;
export type AuthsLazyQueryHookResult = ReturnType<typeof useAuthsLazyQuery>;
export type AuthsQueryResult = ApolloReactCommon.QueryResult<AuthsQuery, AuthsQueryVariables>;
export const CreateLoginAuthDocument = gql`
    mutation CreateLoginAuth($email: String!) {
  createLoginAuth(email: $email) {
    success
    message
  }
}
    `;
export type CreateLoginAuthMutationFn = ApolloReactCommon.MutationFunction<CreateLoginAuthMutation, CreateLoginAuthMutationVariables>;

/**
 * __useCreateLoginAuthMutation__
 *
 * To run a mutation, you first call `useCreateLoginAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLoginAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLoginAuthMutation, { data, loading, error }] = useCreateLoginAuthMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateLoginAuthMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateLoginAuthMutation, CreateLoginAuthMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateLoginAuthMutation, CreateLoginAuthMutationVariables>(CreateLoginAuthDocument, baseOptions);
      }
export type CreateLoginAuthMutationHookResult = ReturnType<typeof useCreateLoginAuthMutation>;
export type CreateLoginAuthMutationResult = ApolloReactCommon.MutationResult<CreateLoginAuthMutation>;
export type CreateLoginAuthMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateLoginAuthMutation, CreateLoginAuthMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $secret: String!) {
  login(email: $email, secret: $secret) {
    success
    message
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      secret: // value for 'secret'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($input: NewUser!) {
  signup(input: $input) {
    username
    email
  }
}
    `;
export type SignupMutationFn = ApolloReactCommon.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    email
    username
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>;