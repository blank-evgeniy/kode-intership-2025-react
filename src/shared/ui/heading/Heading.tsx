import { CssSize, CssTextWeight } from "@/shared/types";
import {
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
} from "./Heading.styles";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  $size?: CssSize;
  $weight?: CssTextWeight;
  $lineHeight?: CssSize;
}

const getHeading = (type: HeadingProps["as"] = "h1") =>
  ({
    h1: StyledHeading1,
    h2: StyledHeading2,
    h3: StyledHeading3,
    h4: StyledHeading4,
  }[type]);

export const Heading = ({ children, as, ...props }: HeadingProps) => {
  const StyledHeading = getHeading(as);

  return <StyledHeading {...props}>{children}</StyledHeading>;
};
