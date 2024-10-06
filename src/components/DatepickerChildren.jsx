import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// children will be rendered last after all other children of datepicker component
const DatepickerChildren = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}>
      <div style={{ color: "red" }}>Do not forget to check the weather!</div>
    </DatePicker>
  );
};

export default DatepickerChildren;
