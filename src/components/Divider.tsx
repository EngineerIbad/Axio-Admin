interface DividerProps {
    color?: string;    // Hex code like #1D1E20
    opacity?: number;  // Value from 0 to 1
}

export default function Divider({ color = "#1D1E20", opacity = 1 }: DividerProps) {
    return (
        <div className="w-full flex justify-center">
            <div
                className="w-full border-t"
                style={{
                    borderColor: color,
                    opacity: opacity
                }}
            />
        </div>
    );
}