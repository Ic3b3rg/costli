import { Icon } from 'react-icons-kit'

interface IconButtonProps {
    icon: any;
    onClick: () => void;
    className?: string;
    size?: number;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, className, size }) => {
    return (
        <button onClick={onClick} className={`rounded-full w-8 h-8 flex justify-center border text-primary border-primary hover:bg-ultralight ${className}`}>
            <Icon icon={icon} size={size ?? 20} />
        </button>

    )
}
