import React, { useState } from "react";
import { ColorPickerProps } from "@/interfaces/Interface";
import styles from './colorPicker.module.css'

function ColorPicker({ defaultColor, avalibleColors, onSelectColor }: ColorPickerProps) {
    const [selectColor, setSelectColor] = useState(defaultColor);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenColorPicker = () => {
        setIsModalOpen(!isModalOpen)
    };

    const handleColorSelector = (color: string) => {
        setSelectColor(color);
        onSelectColor(color);
        setIsModalOpen(false)
    }

    return (
        <div className={styles.colorPicker} style={{ backgroundColor: selectColor }} onClick={handleOpenColorPicker}>
            {isModalOpen && (
                <div className={styles.colorModal}>
                    {avalibleColors.map((color) => (
                        <div className={styles.avalibleColors} key={color} style={{ backgroundColor: color }} onClick={() => handleColorSelector(color)}>
                            
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ColorPicker;