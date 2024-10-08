import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomHeaderTwoMonths = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      renderCustomHeader={({
        monthDate, // provides information about which month and year are displayed.
        customHeaderCount, // the index of the current month being displayed in the date picker
        decreaseMonth,
        increaseMonth,
      }) => (
        <div>
          <button
            aria-label="Previous Month"
            className={
              "react-datepicker__navigation react-datepicker__navigation--previous"
            }
            style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
            onClick={decreaseMonth}
          >
            {/* it's possible to easily customize the icon by just putting any icon inside the nav btn */}
            <FaArrowLeft />
            {/* <span
              className={
                "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
              }
            >
              {"<"}
            </span> */}
          </button>
          <span className="react-datepicker__current-month">
            {/* here date object is formatted to be more readable */}
            {monthDate.toLocaleString("en-US", {
              month: "long", // this makes month full, not contracted like "Oct"
              year: "numeric", // the year will look like a number
            })}
          </span>
          <button
            aria-label="Next Month"
            className={
              "react-datepicker__navigation react-datepicker__navigation--next"
            }
            style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
            onClick={increaseMonth}
          >
            <span
              className={
                "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
              }
            ></span>
          </button>
        </div>
      )}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      monthsShown={2}
    />
  );
};

export default CustomHeaderTwoMonths;
