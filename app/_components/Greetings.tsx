import React from 'react';

const Greetings = () => {
    const getCurrentGreeting = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            return 'Good morning';
        } else if (currentHour < 18) {
            return 'Good afternoon';
        } else {
            return 'Good evening';
        }
    };

    const greetingMessage = getCurrentGreeting();

    return (
        <div>
            <div className='text-2xl font-semibold'>
                {greetingMessage}, Keshav!
            </div>
            <div className='text-sm'>
                Here are your Analytics
            </div>
        </div>
    );
};

export default Greetings;
