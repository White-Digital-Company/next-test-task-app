interface InputErrorProps {
  text: string;
}

export function InputError({ text }: InputErrorProps) {
  return <span className="text-red-500 text-xs">{text}</span>;
}
