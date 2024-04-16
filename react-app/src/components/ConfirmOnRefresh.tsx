import React, { useEffect } from 'react';

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
