import styled from "styled-components";
import { TextColorsType } from "./types";
import { CssSize, CssTextWeight } from "@/shared/types";

export const Text = styled.p<{
  $size?: CssSize;
  $weight?: CssTextWeight;
  $lineHeight?: CssSize;
  $color?: TextColorsType;
}>`
  font-size: ${(props) => props.$size || "16px"};
  font-weight: ${(props) => props.$weight || "400"};
  line-height: ${(props) => props.$lineHeight || "20px"};
  color: ${(props) => props.$color || "var(--text-primary)"};
`;
