import React from 'react';

const LoadingSpinner = () => {
    return (
        <div>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    );
};

export default LoadingSpinner;