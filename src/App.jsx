import CustomizedContainer from "./components/CustomizedContainer";
import DatepickerChildren from "./components/DatepickerChildren";
import DatepickerWithClearInputButton from "./components/DatepickerWithClearInputButton";
import CustomInput from "./components/CustomInput";
import CustomHeader from "./components/CustomHeader";
import CustomHeaderTwoMonths from "./components/CustomHeaderTwoMonths";
import CustomDay from "./components/CustomDay";
import CustomMonth from "./components/CustomMonth";
import CustomCalendarClassName from "./components/CustomCalendarClassName";
import CustomClassName from "./components/CustomClassName";

export default function App() {
  // STYLIZATION OPTIONS

  // explore devtools and overrite styles of already existing classes
  // use custom elements render functions
  // use custom classes props for some elements where it's possible
  
  return (
    <div id="App">
      <CustomClassName />
      {/* <CustomCalendarClassName /> */}
      {/* <CustomDay />
      <CustomMonth /> */}
      {/* <CustomizedContainer /> */}
      {/* <DatepickerChildren /> */}
      {/* <DatepickerWithClearInputButton /> */}
      {/* <CustomInput /> */}
      {/* <CustomHeader /> */}
      {/* <CustomHeaderTwoMonths /> */}
    </div>
  );
}
