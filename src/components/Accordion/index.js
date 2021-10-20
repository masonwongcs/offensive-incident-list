import React, { useEffect, useState } from "react";
import {
  AccordionWrapper,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "./Styled";
import RecordItem from "./RecordItem";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";

function Accordion({ data }) {
  const [currentExpand, setCurrentExpand] = useState("");

  useEffect(() => {
    if (data.size !== 0) {
      const firstKey = Array.from(data)[0][0];
      setCurrentExpand(firstKey);
    }
  }, [data]);

  return (
    <AnimateSharedLayout>
      <AccordionWrapper>
        {Array.from(data).map(([key, records]) => {
          const isOpen = key === currentExpand;
          return (
            <motion.div
              layout
              initial={{ borderRadius: 16 }}
              style={{
                backgroundColor: "#f5f5f5",
                borderRadius: 16,
              }}
            >
              <AccordionItem
                key={key}
                onClick={() => setCurrentExpand(isOpen ? "" : key)}
              >
                <motion.div layout>
                  <AccordionHeader>
                    {key}
                    <div
                      className={`dropdown ${isOpen ? "active" : ""}`}
                    >
                      <span/>
                      <span/>
                    </div>
                  </AccordionHeader>
                </motion.div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <AccordionContent>
                        <div className="record-item-wrapper">
                          {records.map((record) => {
                            return (
                              <RecordItem record={record} key={record._id} />
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </AccordionItem>
            </motion.div>
          );
        })}
      </AccordionWrapper>
    </AnimateSharedLayout>
  );
}

export default Accordion;
