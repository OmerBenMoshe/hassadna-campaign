const Checkbox = ({ children, isSelected, className, ...rest }: { children: React.ReactNode, isSelected?: boolean, className?: string, onClick: (e:any)=>void }) => {
    return (
    <div dir={'rtl'} className={`flex items-center text-white hover:text-neon hover:border-neon transition cursor-pointer {...className}`} {...rest}>
        <span className={`size-5 bg-none transition rounded inline-block border-4 ml-2 ${isSelected && 'border-neon bg-neon'}`}></span>
        <span className={`${isSelected && 'text-neon'}`}>{children}</span>
    </div>)
}

export default Checkbox;