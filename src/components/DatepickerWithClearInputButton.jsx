import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatepickerWithClearInputButton = () => {
  // this is an absolutely positioned button inside input with the styled ::after that can be
  // customized easily
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      isClearable
      placeholderText="I have been cleared!"
    />
  );
};

export default DatepickerWithClearInputButton;
