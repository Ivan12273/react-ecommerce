import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartPreviewWrapper = styled.div`
  padding: 20px;
  border-radius: 15px;
  background-color: #f0f0f0;
  border: 1px solid #e2e2e2;
  position: absolute;
  right: 1%;
  top: 110%;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 100px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    border-radius: 0px 15px 15px 0;
    background: #fafafa;
  }
  &::-webkit-scrollbar-thumb {
    background: #aeaeae;
    border-radius: 0px 15px 15px 0;
  }
  &.hide {
    display: none;
  }
`;

export const BagLink = styled(Link)`
  width: calc(100% - 40px);
  background: black;
  color: white;
  padding: 10px 20px;
  text-align: center;
  color: white;
  margin: 0;
  border-radius: 30px;
  min-width: 150px;
  &.link-to-bag {
    color: white;
    margin: 0;
    font-size: 2rem!important;
  }
`;

export const CartPreviewH2 = styled.h2`
  font-size: 2.3rem;
  min-width: max-content;
  text-align: center;
`;