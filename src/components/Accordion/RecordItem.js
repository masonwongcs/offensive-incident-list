import React from "react";
import styled from "styled-components";
import { PrimaryColor } from "../../GlobalStyled";

function RecordItem({ record }) {
  // Offence Level 1 Description: "OFFENCES AGAINST PROPERTY"
  // Offence Level 2 Description: "THEFT AND RELATED OFFENCES"
  // Offence Level 3 Description: "Other theft"
  // Offence count: "1"
  // Postcode - Incident: "5039"
  // Reported Date: "01/07/2019"
  // Suburb - Incident: "EDWARDSTOWN"
  // _id: 55
  return (
    <RecordItemWrapper>
      <div className="record-header">
        <h3 className="level-1">{record["Offence Level 1 Description"]}</h3>
        <h3 className="level-2">{record["Offence Level 2 Description"]}</h3>
        <h1 className="level-3">{record["Offence Level 3 Description"]}</h1>
        <div className="count">
          Offence count<span>{record["Offence count"]}</span>
        </div>
      </div>
      <div className="record-content">
        <div className="field postal-code">
          <label>Postcode</label>
          {record["Postcode - Incident"]}
        </div>
        <div className="field date">
          <label>Date</label>
          {record["Reported Date"]}
        </div>
        <div className="field postal-code">
          <label>Suburb</label>
          {record["Suburb - Incident"]}
        </div>
      </div>
    </RecordItemWrapper>
  );
}

export default RecordItem;

const RecordItemWrapper = styled.div`
  padding: 16px;
  position: relative;
  &:not(:last-child) {
    border-bottom: 1px solid #ececec;
  }

  h1,
  h3 {
    margin: 0;
  }

  .record-header {
    .level-1 {
      color: #999;
      font-size: 12px;
    }

    .level-2 {
      color: #666;
      font-size: 14px;
    }

    .level-3 {
      color: ${PrimaryColor};
      font-size: 20px;
    }
    .count {
      color: #999;
      font-size: 12px;
      position: absolute;
      top: 16px;
      right: 16px;
      text-transform: uppercase;
      @media screen and (max-width: 400px) {
        position: relative;
        top: 0;
        left: 0;
        margin: 12px 0;
      }
      > span {
        color: ${PrimaryColor};
        width: 35px;
        display: inline-block;
        padding: 4px 6px;
        background-color: #ececec;
        border-radius: 30px;
        margin-left: 12px;
        font-weight: bold;
        text-align: center;
      }
    }
  }

  .record-content {
    display: flex;
    align-items: flex-start;
    margin-top: 16px;
    border-radius: 10px;
    background-color: #fafafa;
    .field {
      flex-basis: calc(100% / 3);
      padding: 12px;
      &:not(:last-child) {
        border-right: 2px solid #fff;
      }
      label {
        display: block;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
