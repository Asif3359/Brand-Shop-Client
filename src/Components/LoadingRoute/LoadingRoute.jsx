import React from 'react';

const LoadingRoute = ({ children, loading, length }) => {

    if (loading && !length) {
        return (
            <div className='text center flex justify-center items-center h-[90vh]'>
                <h2>Product not available now !</h2>
            </div>
        );
    }
    if (loading) {
        return (
            <div className='text center flex justify-center items-center h-[90vh]'>
                <h2>Please Wait</h2>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }
    if (!length) {
        return children;
    }

};

export default LoadingRoute;

// import React from 'react';
// import { Children } from 'react';

// const LoadingRoute = () => {


//     return ();
// };

// export default LoadingRoute;