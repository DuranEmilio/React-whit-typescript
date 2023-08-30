import React, { useState, ReactNode } from 'react';
import styles from './categories.module.css'

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, onClose, children }) => {
  return (
    <div className={`${styles.dropdownMenu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.dropdownContent}>
        {children}
      </div>
    </div>
  );
};  

export default DropdownMenu;
