import { FC } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

const FormButton: FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className,
  isLoading = false,
  disabled = false,
}) => {
  return (
    <div className="field">
      <div className="control">
        <button
          type={type}
          onClick={onClick}
          className={clsx("button", className, { "is-loading": isLoading })}
          disabled={disabled || isLoading}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default FormButton;
