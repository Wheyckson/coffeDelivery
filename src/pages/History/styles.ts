import styled from "styled-components";

export const HistoryContainer = styled.section`
  min-height: 90vh;
  max-width: 1160px;
  padding: 32px 20px;
  margin: 0 auto;

  > h2 {
    ${({ theme }) => theme.fonts.titleXS}
    margin-top: 24px;
  }

  > h1 {
    ${({ theme }) => theme.fonts.titleXS}
    margin-bottom: 24px;
  }
`;

export const HistoryCardContainer = styled.div`
  display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: #f3f2f2;
    padding: 16px 24px;
    margin-bottom: 16px;
    justify-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 16px;
    ${({ theme }) => theme.fonts.textXS}
  }

  > p {
    display: flex;
    align-items: center;
    ${({ theme }) => theme.fonts.textXS}
  }

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    min-width: 274px;

    > p:nth-child(3) {
      margin-left: 3.5rem;
    }
  }
`;
