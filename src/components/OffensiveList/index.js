import React, { useEffect, useState } from "react";
import Accordion from "../Accordion";
import { Wrapper } from "../../GlobalStyled";
import { FieldItem, FieldsSelection } from "./Styled";
import { fetchData } from "./api";

function OffensiveList() {
  const [originalRecords, setOriginalRecords] = useState([]);
  const [records, setRecords] = useState(new Map());
  const [fields, setFields] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData().then((response) => {
      const { records, fields } = response;

      setOriginalRecords(records);

      const fieldsOption = fields
        .map((item) => item.id)
        .filter((field) => field !== "_id");

      setFields(fieldsOption);
    });
  }, []);

  useEffect(() => {
    if (
      fields.length !== 0 &&
      fields.find((item) => item === "Suburb - Incident")
    ) {
      setFilter("Suburb - Incident");
    }
  }, [fields]);

  useEffect(() => {
    if (originalRecords.length !== 0) {
      const groupBySuburb = originalRecords
        .sort((a, b) => a[filter].localeCompare(b[filter]))
        .reduce((acc, item) => {
          const key = item[filter];

          acc.set(key, [...(acc.get(key) || []), item]);

          return acc;
        }, new Map());

      setRecords(groupBySuburb);
    }
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
