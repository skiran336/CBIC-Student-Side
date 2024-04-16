import React, { useEffect } from 'react';

//This is used to ask the user for confirmation if he refreshes the webpage.
function ConfirmOnRefresh() {
    useEffect(() => {
        const handleBeforeUnload = (event: { preventDefault: () => void; returnValue: string; }) => {
            event.preventDefault(); 
            event.returnValue = ''; 
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
