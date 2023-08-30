interface Item {
    name: string;
    id: string;
    color: string;
}

interface ColorPickerProps {
    defaultColor: string;
    avalibleColors: string[];
    onSelectColor: (color: string) => void;
}

export type { Item, ColorPickerProps };