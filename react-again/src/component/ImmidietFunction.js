import React from 'react';

function ImmidietFunction() {
    const markss = 50; // This should be outside the return
    return (
        <div>
            {
                (() => markss > 40 ? 
                    <h1 className='if'>Pass</h1> : 
                    <h1 className='else'>Fail</h1>
                )()
            }
        </div>
    );
}

export default ImmidietFunction;
