export type AuthStateType = {
  isAuthenticated: boolean;
  user: { username: string } | null;
};

export type NewAccountDTO = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
};

export const initalNewAccountDTO: NewAccountDTO = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

export type LoginDTO = {
  username: string;
  password: string;
};
