const Checkbox = ({ label, isSelected, className }: { label: string, isSelected?: boolean, className?: string }) => {
    return (
    <div dir={'rtl'} className={`flex items-center text-white hover:text-neon hover:border-neon transition cursor-pointer {...className}`}>
        <span className={`size-5 bg-none rounded-full inline-block border-4 ml-2 ${isSelected && 'border-neon bg-neon'}`}></span>
        <span className={`${isSelected && 'text-neon'}`}>{label}</span>
    </div>)
}

export default Checkbox;