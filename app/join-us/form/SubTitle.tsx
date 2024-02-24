import React from 'react';

const SubTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <h2 className='font-bold text-neon mb-4'>{children}</h2>
    );
};

export default SubTitle;