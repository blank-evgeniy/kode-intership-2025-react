import { forwardRef } from "react";
import {
  StyledActions,
  StyledContainer,
  StyledIconContainer,
  StyledInput,
} from "./Input.styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  renderIcon?: () => React.ReactNode;
  renderActions?: () => React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ renderActions, renderIcon, style, className, ...props }, ref) => {
    return (
      <StyledContainer style={style} className={className}>
        {renderIcon && (
          <StyledIconContainer>{renderIcon()}</StyledIconContainer>
        )}
        <StyledInput ref={ref} {...props} />
        {renderActions && <StyledActions>{renderActions()}</StyledActions>}
      </StyledContainer>
    );
  }
);
