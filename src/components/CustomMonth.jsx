import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Allows to choose months and years separately

const CustomMonth = () => {
  const renderMonthContent = (month, shortMonth, longMonth, day) => {
    const fullYear = new Date(day).getFullYear();
    const tooltipText = `Tooltip for month: ${longMonth} ${fullYear}`;

    return <span title={tooltipText}>{shortMonth}</span>;
  };
  return (
    <DatePicker
      selected={new Date()}
      renderMonthContent={renderMonthContent}
      // appears as a list of possible months below the year slider
      showMonthYearPicker
      dateFormat="MM/yyyy"
    />
  );
};

export default CustomMonth;
