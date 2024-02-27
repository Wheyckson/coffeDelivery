import { styled } from "styled-components";

export const CartContainer = styled.main`
  max-width: 1160px;
  padding: 32px 20px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 64px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-width: 468px;
  }
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > h1 {
    ${({ theme }) => theme.fonts.titleXS}
    margin-bottom: 16px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3f2f2;
  padding: 40px;
  gap: 8px;
  border-radius: 8px;
`;

export const HeaderGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;

  div:last-child {
    display: flex;
    flex-direction: column;

    span:first-child {
      ${({ theme }) => theme.fonts.textM}
      color: ${({ theme }) => theme.colors["base-subtitle"]};
    }

    span:last-child {
      ${({ theme }) => theme.fonts.textS}
      color: ${({ theme }) => theme.colors["base-text"]};
    }
  }
`;

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number fullAddress fullAddress"
    "neighborhood city state";
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`;

export const PaymentContainer = styled.div`
  margin-top: 32px;
`;

export const PaymentOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }
`;

export const PaymentErrorMessage = styled.p`
  ${({ theme }) => theme.fonts.titleXS}
  font-weight: 400;
  color: red;
`;

export const CofeeSelected = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > h1 {
    ${({ theme }) => theme.fonts.titleXS}
  }
`;

export const CartEmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: normal;
    color: ${({ theme }) => theme.colors["base-text"]};
  }

  & a {
    margin-top: 4px;
    color: ${({ theme }) => theme.colors["base-text"]};
    text-decoration: underline;
  }
`;

export const CoffeSelectedContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  background-color: #f3f2f2;
  padding: 40px;
  border-radius: 8px;
`;

export const Coffee = styled.div`
  display: flex;
  gap: 56px;
  justify-content: space-between;
  margin-bottom: 48px;

  > div {
    > img {
      width: 64px;
      height: 64px;
    }

    display: flex;
    align-items: stretch;
    gap: 16px;

    > div {
      color: ${({ theme }) => theme.colors["base-subtitle"]};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
    min-width: 52px;
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 8px;

  > button {
    padding: 6px 8px;
    background-color: ${({ theme }) => theme.colors["base-button"]};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors["base-hover"]};
    }

    > svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    > span {
      ${({ theme }) => theme.fonts.buttonM}
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors["base-text"]};
    }
  }
`;

export const CartTotalInfo = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${({ theme }) => theme.fonts.textS}
    }

    span:last-child {
      ${({ theme }) => theme.fonts.textM}
    }
  }

  div:last-child {
    span {
      ${({ theme }) => theme.fonts.textL}
      font-weight: bold;
    }
  }
`;

export const CheckoutButton = styled.button`
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;

  ${({ theme }) => theme.fonts.buttonG}
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  border-radius: 6px;
`;
