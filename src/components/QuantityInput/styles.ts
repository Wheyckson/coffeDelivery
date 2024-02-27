import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;

  padding: 8px;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  border-radius: 6px;

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${({ theme }) => theme.colors.purple};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors["purple-dark"]};
    }
  }

  span {
    padding-top: 2px;
    ${({ theme }) => theme.fonts.textM}
    color: ${({ theme }) => theme.colors["base-title"]};
  }
`;
