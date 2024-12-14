import React from 'react';

const ResCal: React.FC<{ response: string }> = ({ response }) => {
  

    return(
    <>
    <h1>{response}</h1>
    </>
  );
}

export default ResCal;