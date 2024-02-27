import { styled } from "styled-components";

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }

    span {
      ${({ theme }) => theme.fonts.textM}
    }
  }
`;
