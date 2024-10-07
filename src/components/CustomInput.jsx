import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomInput = () => {
  const [startDate, setStartDate] = useState(new Date());
  //   automatically passed props
  const ExampleCustomInput = ({ value, onClick, className }) => (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput className="example-custom-input" />}
    />
  );
};

export default CustomInput;
