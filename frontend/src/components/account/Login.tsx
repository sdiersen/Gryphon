import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/account/authSlice";
import { LoginDTO } from "../../types/accountTypes";
import { AppDispatch } from "../../store";
import FormButton from "../common/FormButton";
import FormInput from "../common/FormInput";
import SingleContentLayout from "../Layouts/SingleContentLayout";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const loginDTO: LoginDTO = {
      username,
      password,
    };
    try {
      await dispatch(login(loginDTO));
    } catch (error) {
      console.error(error);
    }
    setIsSubmitting(false);
  };

  return (
    <SingleContentLayout>
      <h2 className="title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="field is-grouped">
          <FormInput
            label="Username"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormButton
            type="button"
            className="is-light"
            onClick={() => {
              navigate("/register");
            }}
          >
            Forgot Username
          </FormButton>
        </div>
        <FormInput
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="field is-grouped">
          <FormButton
            type="submit"
            className="is-primary"
            isLoading={isSubmitting}
          >
            Login
          </FormButton>
          <FormButton
            type="button"
            className="is-light"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </FormButton>
        </div>
      </form>
    </SingleContentLayout>
  );
};

export default Login;
