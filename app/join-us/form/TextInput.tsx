const TextInput = ({
  value,
  ...rest
}: {
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
}) => {
  return (
    <input
      type="text"
      className={`bg-purple rounded-full border-white border-2 focus:bg-white focus:outline-none p-3 text-sm transition hover:border-neon placeholder-white ${
        value && "bg-white"
      }`}
      value={value}
      {...rest}
    />
  );
};

export default TextInput;
