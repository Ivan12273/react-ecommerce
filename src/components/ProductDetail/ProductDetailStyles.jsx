import styled from 'styled-components';

export const ProductDetailWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductDetailImageWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  @media (max-width: 1300px) {
    width: 70%;
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
`

export const ProductDetailImage = styled.img`
  width: 60%;
  @media (max-width: 1300px) {
    width: 70%;
  }
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 1000px) {
    width: 90%;
  }
`

export const ProductDetailInfo = styled.div`
  width: 40%;
  margin: 0 25px;
  @media (max-width: 769px) {
    width: 70%;
    margin: 20px 0 30px 0;
  }
`
export const ProductDetailInfoTextWrapper = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: 15px;
`
export const ProductDetailInfoTextH1 = styled.h1`
  margin: 0;
  font-weight: 700;
`;

export const ProductDetailInfoTextH3 = styled.h3`
  margin: 0 0 10px 0;
  font-weight: 700;
`;
export const ProductDetailInfoTextH4 = styled.h4`
  margin: 0;
  color: #808080;
`;