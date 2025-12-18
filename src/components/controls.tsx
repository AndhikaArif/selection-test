interface IControlsProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Controls({ children, onClick }: IControlsProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="py-1 px-1.5 rounded text-sm cursor-pointer transition duration-300 bg-blue-500 hover:scale-110"
    >
      {children}
    </button>
  );
}
