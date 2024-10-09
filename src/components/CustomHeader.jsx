import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// the customized part is the top part of the header where we choose months and years
// it's important to add all elements of the top manually if using CustomHeader, otherwise we won't get the default datepicker elements and the space they
// were supposed to take will not have any default elements
// with custom header I can generate the appropriate range of years and months and style the top part quite flexibly

const range = (start, end, step) => {
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
};

const getYear = (date) => {
  return date.getFullYear();
};

const getMonth = (date) => {
  return date.getMonth();
};

const CustomHeader = () => {
  const [startDate, setStartDate] = useState(new Date());
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <DatePicker
      renderCustomHeader={({
        // automatically provided props by the datepicker, datepicker handles them
        date, // current date
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        // this first div is put inside datepicker own header, so default datepicker header's paddings and bg-color are still applied
        // by default
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select
            value={getYear(date)}
            // destructuring of event and target objects
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            //   the value is passed as a word
            value={months[getMonth(date)]}
            // the state of the month is a number
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default CustomHeader;
