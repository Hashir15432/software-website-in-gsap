export interface JumpingTextProps {
    text: string;
    className?: string;
    hoverColor?: string; // Tailwind class for hover color, e.g. "hover:text-blue-500"
    yOffset?: number;    // Pixels to jump up, e.g. -10
}
