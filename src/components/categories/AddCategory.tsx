import React, { useState } from "react";
import PrimaryButton from "../PrimaryButton";
import styles from './addCategory.module.css'
import ColorPicker from "../ColorPicker";
import { ColorPickerProps } from "@/interfaces/Interface";

function AddCategory() {
    const defaultColor = '#ffff';
    const avalibleColors = ['#ffff', '#FF4E4E', '#FDCA40', '#89BBFE', '#82D173'];
    const [selectedColor, setSelectedColor] = useState(defaultColor);

    const handleColorSelection = (color: string) => {
        setSelectedColor(color);
    };

    return (
        <section>
            <div className={styles.form}>
                <div>
                    <div className={styles.colorPiker}>
                        <p>Select Color:</p>
                        <ColorPicker
                            avalibleColors={avalibleColors}
                            defaultColor={defaultColor}
                            onSelectColor={handleColorSelection}
                        />
                    </div>
                </div>
                <input className={styles.textInputs} type="text" placeholder="Nombre de la categoria" />
            </div>
        </section>
    )
}

export default AddCategory;
