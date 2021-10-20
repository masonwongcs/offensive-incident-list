import styled from "styled-components";
import { PrimaryColor } from "../../GlobalStyled";

export const AccordionWrapper = styled.div``;

export const AccordionItem = styled.div`
  margin: 16px 0;
  padding: 20px;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    padding: 12px;
  }
`;

export const AccordionHeader = styled.div`
  font-weight: bold;
  margin-left: 12px;
  display: flex;
  align-items: center;
  color: ${PrimaryColor};
  .dropdown {
    margin-left: auto;
    width: 20px;
    height: 20px;
    position: relative;
    display: flex;
    align-items: center;
    &.active {
      > span {
        &:nth-child(1) {
          transform-origin: top right;
          transform: translateY(-4px) rotate(-45deg);
        }
        &:nth-child(2) {
          transform-origin: top left;
          transform: translateY(-4px) rotate(45deg);
        }
      }
    }
    > span {
      height: 2px;
      width: 50%;
      background-color: #ccc;
      display: block;
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
      &:nth-child(1) {
        transform-origin: bottom right;
        transform: translateY(4px) rotate(45deg);
      }
      &:nth-child(2) {
        transform-origin: bottom left;
        transform: translateY(4px) rotate(-45deg);
      }
    }
  }
`;

export const AccordionContent = styled.div`
  border-radius: 16px;
  border: 1px solid #ececec;
  background-color: #fff;
  margin-top: 20px;
`;
