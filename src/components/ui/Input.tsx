type InputProps = {
  type?: string;
  placeholder: string;
};

const Input = ({ type = "text", placeholder }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
      w-full
      rounded-lg
      border
      border-zinc-700
      bg-black
      p-3
      text-white
      focus:outline-none
      focus:ring-2
      focus:ring-yellow-400
      "
    />
  );
};

export default Input;