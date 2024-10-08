import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// the outer container area, the first after popper, convenient to style general paddings, border and bg-color
const CustomCalendarClassName = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      calendarClassName="calendar"
    />
  );
};

export default CustomCalendarClassName;
