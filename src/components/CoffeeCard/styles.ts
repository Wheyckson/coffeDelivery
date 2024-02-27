import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors["base-card"]};
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  width: 256px;

  display: flex;
  flex-direction: column;

  text-align: center;
`;

export const CoffeeImg = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  margin: 12px 0px;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors["yellow-light"]};
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    text-transform: uppercase;
    ${({ theme }) => theme.fonts.tag}
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > h2 {
    ${({ theme }) => theme.fonts.titleS}
    color: ${({ theme }) => theme.colors["base-subtitle"]};
  }

  > span {
    ${({ theme }) => theme.fonts.textS}
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;

export const Buy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${({ theme }) => theme.fonts.textS}
    color: ${({ theme }) => theme.colors["base-text"]};
  }

  span:last-child {
    ${({ theme }) => theme.fonts.titleM}
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;

export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    display: flex;
    padding: 8px;
    border-radius: 6px;
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme.colors["yellow-dark"] : theme.colors["purple-dark"]};
    transition: background-color 0.2s;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.colors.yellow : theme.colors.purple};
    }
  }
`;
