import { styled } from "@/styled-system/jsx"

export const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 35px;
  line-height: 12px;
  height: min-content;
  background-color: token(colors.color1);
  border-radius: 24px;
  font-family: 'PT Sans Narrow', sans-serif;
  color: black;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 35px;
  line-height: 12px;
  height: min-content;
  font-family: 'PT Sans Narrow', sans-serif;
  background-color: token(colors.color4);
  border-radius: 24px;
  color: white;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 14px 20px;
    font-size: 18px;
  }
`;
export const Icon = styled.img`
width: 28px;
height:28px;
`
