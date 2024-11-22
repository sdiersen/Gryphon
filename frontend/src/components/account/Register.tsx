import { FC, useState } from "react";
import SingleContentLayout from "../Layouts/SingleContentLayout";
import { useNavigate } from "react-router-dom";
import FormInput from "../common/FormInput";
import FormButton from "../common/FormButton";
import { initalNewAccountDTO, NewAccountDTO } from "../../types/accountTypes";
import { newAccount } from "../../store/account/authSlice";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";

const Register: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<NewAccountDTO>(initalNewAccountDTO);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await dispatch(newAccount(formData));
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCancel = () => {
    setFormData(initalNewAccountDTO);
    navigate("/login");
  };

  return (
    <SingleContentLayout>
      <h2 className="title">Register</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="First Name"
          type="text"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <FormInput
          label="Last Name"
          type="text"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          label="Username"
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="field is-grouped">
          <FormButton
            type="submit"
            className="is-primary"
            isLoading={isSubmitting}
          >
            Register
          </FormButton>
          <FormButton
            type="button"
            className="is-secondary"
            isLoading={isSubmitting}
            onClick={handleCancel}
          >
            Cancel
          </FormButton>
        </div>
      </form>
    </SingleContentLayout>
  );
};

export default Register;
