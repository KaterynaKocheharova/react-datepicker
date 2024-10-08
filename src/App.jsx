import CustomizedContainer from "./components/CustomizedContainer";
import DatepickerChildren from "./components/DatepickerChildren";
import DatepickerWithClearInputButton from "./components/DatepickerWithClearInputButton";
import CustomInput from "./components/CustomInput";
import CustomHeader from "./components/CustomHeader";
import CustomHeaderTwoMonths from "./components/CustomHeaderTwoMonths";
import CustomDay from "./components/CustomDay";
import CustomMonth from "./components/CustomMonth";

export default function App() {
  return (
    <div id="App">
      <CustomDay />
      <CustomMonth />
      {/* <CustomizedContainer /> */}
      {/* <DatepickerChildren /> */}
      {/* <DatepickerWithClearInputButton /> */}
      {/* <CustomInput /> */}
      {/* <CustomHeader /> */}
      {/* <CustomHeaderTwoMonths /> */}
    </div>
  );
}
