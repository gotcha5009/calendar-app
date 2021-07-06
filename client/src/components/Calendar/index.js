import {
  Calendar as NativeCalendar,
  momentLocalizer,
} from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const Calendar = () => {
  const localizer = momentLocalizer(moment);
  const events = [];

  return (
    <NativeCalendar
      localizer={localizer}
      defaultDate={new Date()}
      defaultView="month"
      events={events}
      style={{ height: '100vh' }}
    />
  );
};

export default Calendar;
