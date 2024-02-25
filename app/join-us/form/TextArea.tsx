const TextArea = ({ ...rest }: { value: string, onChange: (e: any) => void }) => {
  return (
    <textarea
      className="bg-purple focus:outline-none border-2 text-white placeholdeer-white h-full rounded-lg"
      {...rest}
    />
  );
};

export default TextArea;
