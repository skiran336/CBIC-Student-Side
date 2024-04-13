import React, { useEffect } from 'react';

function ConfirmOnRefresh() {
    useEffect(() => {
        const handleBeforeUnload = (event: { preventDefault: () => void; returnValue: string; }) => {
            event.preventDefault(); // standard for most browsers
            event.returnValue = ''; // required for Chrome
            // You can also set a custom message, but modern browsers generally
            // provide their own default message for security reasons.
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <div>
        </div>
    );
}

export default ConfirmOnRefresh;
