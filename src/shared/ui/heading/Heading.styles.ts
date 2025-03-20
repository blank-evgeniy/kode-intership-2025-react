import { CssSize, CssTextWeight } from "@/shared/types";
import styled from "styled-components";

export const StyledHeading1 = styled.h1<{
  $size?: CssSize;
  $weight?: CssTextWeight;
  $lineHeight?: CssSize;
}>`
  font-size: ${(props) => props.$size || "24px"};
  font-weight: ${(props) => props.$weight || "700"};
  line-height: ${(props) => props.$lineHeight || "28px"};
  color: var(--text-primary);
`;

export const StyledHeading2 = styled.h2<{
  $size?: CssSize;
  $weight?: CssTextWeight;
  $lineHeight?: CssSize;
}>`
  font-size: ${(props) => props.$size || "20px"};
  font-weight: ${(props) => props.$weight || "600"};
  line-height: ${(props) => props.$lineHeight || "24px"};
  color: var(--text-primary);
`;

export const StyledHeading3 = styled.h3<{
  $size?: CssSize;
  $weight?: CssTextWeight;
  $lineHeight?: CssSize;
}>`
  font-size: ${(props) => props.$size || "17px"};
  font-weight: ${(props) => props.$weight || "600"};
  line-height: ${(props) => props.$lineHeight || "22px"};
  color: var(--text-primary);
`;

export const StyledHeading4 = styled.h4<{
  $size?: CssSize;
  $weight?: CssTextWeight;
  $lineHeight?: CssSize;
}>`
  font-size: ${(props) => props.$size || "16px"};
  font-weight: ${(props) => props.$weight || "500"};
  line-height: ${(props) => props.$lineHeight || "20px"};
  color: var(--text-primary);
`;
