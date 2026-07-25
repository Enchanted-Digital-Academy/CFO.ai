type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <button
      className="
      w-full
      rounded-lg
      bg-yellow-400
      py-3
      font-semibold
      text-black
      transition
      hover:bg-yellow-500
      "
    >
      {text}
    </button>
  );
};

export default Button;