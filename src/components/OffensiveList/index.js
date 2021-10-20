import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "../Accordion";
import { Wrapper } from "../../GlobalStyled";
import { FieldItem, FieldsSelection } from "./Styled";

function OffensiveList() {
  const [originalRecords, setOriginalRecords] = useState([]);
  const [records, setRecords] = useState(new Map());
  const [fields, setFields] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(
        "/api/3/action/datastore_search?resource_id=590083cd-be2f-4a6c-871e-0ec4c717717b"
      )
      .then((response) => {
        const {
          data: {
            result: { records, fields },
          },
        } = response;

        const groupBySuburb = records.reduce((acc, item) => {
          const key = item["Suburb - Incident"];

          acc.set(key, [...(acc.get(key) || []), item]);

          return acc;
        }, new Map());

        setOriginalRecords(records);
        setRecords(groupBySuburb);

        const fieldsOption = fields
          .map((item) => item.id)
          .filter((field) => field !== "_id");

        setFields(fieldsOption);
      });
  }, []);

  // useEffect(() => {
  //   if (fields.length !== 0) {
  //     setFilter(fields[0]);
  //   }
  // }, [fields]);

  useEffect(() => {
    const groupBySuburb = originalRecords.reduce((acc, item) => {
      const key = item[filter];

      acc.set(key, [...(acc.get(key) || []), item]);

      return acc;
    }, new Map());

    setRecords(groupBySuburb);
  }, [filter]);

  return (
    <div>
      <FieldsSelection>
        {fields.map((field) => (
          <FieldItem
            key={field}
            selected={field === filter}
            onClick={() => setFilter(field)}
          >
            {field}
          </FieldItem>
        ))}
      </FieldsSelection>
      <Wrapper>
        <Accordion data={records} />
      </Wrapper>
    </div>
  );
}

export default OffensiveList;
