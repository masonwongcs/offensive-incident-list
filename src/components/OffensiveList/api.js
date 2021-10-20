import axios from "axios";

export const fetchData = (UPSTREAM) => {
  return new Promise((resolve, reject) => {
    // Proxy parse to setupProxy.js
    try {
      axios
        .get(
          `${
            UPSTREAM ? UPSTREAM : ""
          }/api/3/action/datastore_search?resource_id=590083cd-be2f-4a6c-871e-0ec4c717717b`
        )
        .then((response) => {
          const {
            data: {
              result: { records, fields },
            },
          } = response;

          resolve({
            records,
            fields,
          });
        });
    } catch (e) {
      reject({});
    }
  });
};
