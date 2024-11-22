import clsx from "clsx";
import { FC } from "react";
import "../../assets/styles/commonForm.css";

interface FormInputProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const FormInput: FC<FormInputProps> = ({
  label,
  type,
  id,
  value,
  onChange,
  className,
}) => {
  return (
    <div className="field is-horizontal">
      <div className="form-group">
        <div className="field-label is-normal">
          <label className={clsx("form-label", className)} htmlFor={id}>
            <span className={clsx("form-label-text")}>{label}:</span>
          </label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className={clsx("form-input", className)}
                type={type}
                id={id}
                value={value}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
