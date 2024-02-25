import React from 'react';

const SelectButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <button className={`font-bold bg-white text-darkGray p-3 border-none rounded-full hover:bg-neon text-sm xl:text-lg {...className}`}>{children}</button>
    );
};

export default SelectButton;