import React from 'react';

const SubTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className='font-bold text-neon mb-4'>{children}</span>
    );
};

export default SubTitle;