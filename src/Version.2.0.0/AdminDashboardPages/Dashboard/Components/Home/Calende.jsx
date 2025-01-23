import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyApp() {
    const [value, setValue] = useState(new Date());

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div className="flex justify-center items-center w-full">
            <Calendar
                onChange={handleChange}
                value={value}
                
                tileClassName={({ date, view }) => {
                    const today = new Date();
                    if (
                        date.getDate() === today.getDate() &&
                        date.getMonth() === today.getMonth() &&
                        date.getFullYear() === today.getFullYear()
                    ) {
                        return 'highlight-today';
                    }
                    return null;
                }}
            />
        </div>
    );
}

export default MyApp;
