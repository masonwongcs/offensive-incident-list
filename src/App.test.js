import { render } from "@testing-library/react";
import { fetchData } from "./components/OffensiveList/api";
import RecordItem from "./components/Accordion/RecordItem";
import Accordion from "./components/Accordion";

test("API calling", () => {
  return fetchData("https://data.sa.gov.au/data").then((data) => {
    expect(data).toBeDefined();
  });
});

test("Render Accordian", () => {
  const records = new Map();
  records.set("ADELAIDE", [
    {
      _id: 1,
      "Reported Date": "01/07/2019",
      "Suburb - Incident": "ADELAIDE",
      "Postcode - Incident": "5000",
      "Offence Level 1 Description": "OFFENCES AGAINST PROPERTY",
      "Offence Level 2 Description": "FRAUD DECEPTION AND RELATED OFFENCES",
      "Offence Level 3 Description": "Obtain benefit by deception",
      "Offence count": "1",
    },
    {
      _id: 2,
      "Reported Date": "01/07/2019",
      "Suburb - Incident": "ADELAIDE",
      "Postcode - Incident": "5000",
      "Offence Level 1 Description": "OFFENCES AGAINST PROPERTY",
      "Offence Level 2 Description": "FRAUD DECEPTION AND RELATED OFFENCES",
      "Offence Level 3 Description":
        "Other fraud, deception and related offences",
      "Offence count": "1",
    },
  ]);
  render(<Accordion data={records} />);
});

test("Render Record Item", () => {
  const record = {
    "Offence Level 1 Description": "OFFENCES AGAINST PROPERTY",
    "Offence Level 2 Description": "THEFT AND RELATED OFFENCES",
    "Offence Level 3 Description": "Other theft",
    "Offence count": "1",
    "Postcode - Incident": "5039",
    "Reported Date": "01/07/2019",
    "Suburb - Incident": "EDWARDSTOWN",
    _id: 55,
  };
  render(<RecordItem record={record} />);
});
