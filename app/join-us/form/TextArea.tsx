const TextArea = ({ className,...rest }: { value: string, onChange: (e: any) => void, className?: string}) => {
  return (
    <textarea
      className={`bg-purple focus:outline-none border-2 text-white placeholdeer-white h-full rounded-lg ${className}`}
      {...rest}
    />
  );
};

export default TextArea;
