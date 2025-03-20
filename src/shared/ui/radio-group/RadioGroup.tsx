import React from "react";
import {
  RadioGroupContainer,
  RadioInput,
  RadioWrapper,
} from "./RadioGroup.styles";

interface RadioGroupProps {
  children: React.ReactNode;
}

export const RadioGroup = ({ children }: RadioGroupProps) => {
  return <RadioGroupContainer>{children}</RadioGroupContainer>;
};

interface RadioGroupItemProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const RadioGroupItem = ({
  id,
  label,
  ...props
}: RadioGroupItemProps) => (
  <RadioWrapper htmlFor={id}>
    <RadioInput id={id} {...props} />
    {label}
  </RadioWrapper>
);
