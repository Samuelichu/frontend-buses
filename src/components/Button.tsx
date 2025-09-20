
type ButtonProps = {
  texto: string;
  onClick: () => void   
  disabled ? : boolean;
};

function Button({ texto, onClick, disabled}: ButtonProps) {
  return (
    <>
      <button className="p-2 rounded-md bg-blue-500 cursor-pointer" onClick={onClick} disabled={disabled}>{texto}</button>
    </>
  );
}

export default Button;
