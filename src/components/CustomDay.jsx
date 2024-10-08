import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Used to customize days inside calendar

const CustomDay = () => {
  const [startDate, setStartDate] = useState(new Date());

  // this function extracts and returns the month number 1-31
  const getDate = (date) => {
    return date.getDate();
  };

  const renderDayContents = (day, date) => {
    // this text will be seen on hover on the day
    const tooltipText = `Tooltip for date: ${date}`;
    return <span title={tooltipText}>{getDate(date)}</span>;
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      renderDayContents={renderDayContents}
    />
  );
};

export default CustomDay;
