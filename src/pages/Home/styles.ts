import { styled } from "styled-components";

export const BackgroundBanner = styled.section`
  display: inline-block;
  position: relative;
  width: 100%;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }

  @media (max-width: 1000px) {
    img#hero-bg {
      min-height: 100%;
    }
  }
`;

export const CoffeeContent = styled.div`
  max-width: 1160px;
  padding: 92px 20px;
  margin: 0 auto;

  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    ${({ theme }) => theme.fonts.titleXL}
    color: ${({ theme }) => theme.colors["base-title"]}
  }

  label {
    ${({ theme }) => theme.fonts.textL}
    color: ${({ theme }) => theme.colors["base-subtitle"]}
  }
`;

export const CoffeeList = styled.section`
  max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    ${({ theme }) => theme.fonts.titleL}
    color: ${({ theme }) => theme.colors["base-subtitle"]}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
    justify-items: center;

    @media (max-width: 1430px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 670px) {
      grid-template-columns: 1fr;
    }
  }
`;
