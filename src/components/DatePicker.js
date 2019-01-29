import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = (props) => {
    return (
        <DatePicker
          selected={props.startDate}
          onChange={props.handleChange}
          showTimeSelect
          minDate={new Date()}
          inline
          
        />
    );
}

export default DatePickerComponent;