export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

interface IButton extends ButtonProps {
  variant: string;
}

const Button: React.FC<IButton> = (props) => {
  const { children, variant, ...rest } = props;

  if (variant === "primary") {
    return (
      <button
        className="flex items-center bg-white rounded-md shadow-xl text-blue-600 px-3 font-bold hover:bg-gray-200 hover:shadow-none transition"
        {...rest}
      >
        {children}
      </button>
    );
  }
  if (variant === "secondary") {
    return (
      <button
        className="flex items-center bg-blue-700 rounded-md shadow-xl text-white px-3 py-2 font-bold hover:bg-blue-500 hover:shadow-none transition"
        {...rest}
      >
        {children}
      </button>
    );
  }
  return <button {...rest}>{children}</button>;
};

export default Button;
