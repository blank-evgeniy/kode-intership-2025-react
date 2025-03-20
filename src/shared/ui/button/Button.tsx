import { forwardRef } from "react";
import { IconButton, TextButton } from "./Button.styles";
import { ButtonVariant, ButtonVariants } from "./ButtonVariants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: ButtonVariant;
}

const getButton = (variant: ButtonVariant) =>
  ({
    [ButtonVariants.text]: TextButton,
    [ButtonVariants.icon]: IconButton,
  }[variant]);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, ...props }, ref) => {
    const StyledButton = getButton(variant);

    return (
      <StyledButton ref={ref} {...props}>
        {children}
      </StyledButton>
    );
  }
);
