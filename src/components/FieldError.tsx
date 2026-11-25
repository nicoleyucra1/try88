interface FieldErrorProps{
    message: string;
}

export default function FieldError({message}: FieldErrorProps){
    if (!message) return null;
    return <p className="text-error text-sm">{message}</p>;
}