import React from 'react';

const SelectButton = ({ isSelected, children, className, ...rest }: { isSelected:boolean, children: React.ReactNode, className?: string, onClick?:(e:any) => void }) => {
    return (
        <button className={`font-bold p-3 border-none rounded-full text-sm xl:text-lg transition-all ${isSelected ? 'bg-orange text-white' : 'bg-white text-darkGray hover:bg-neon'}  {...className}`} {...rest}>{children}</button>
    );
};

export default SelectButton;