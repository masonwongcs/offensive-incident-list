import styled from "styled-components";
import { PrimaryColor } from "../../GlobalStyled";

export const FieldsSelection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  margin: 20px 0;
`;

export const FieldItem = styled.div`
  font-size: 12px;
  color: ${({ selected }) => (selected ? "#fff" : "#333")};
  background-color: ${({ selected }) => (selected ? PrimaryColor : "#fff")};
  border-radius: 16px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 20px;
    padding: 12px;
  }
`;
