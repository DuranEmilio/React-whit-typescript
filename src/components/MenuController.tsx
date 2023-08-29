import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import PrimaryButton from './PrimaryButton';
import Categories from '../components/categories/Categories'

const MenuController: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <PrimaryButton onClick={toggleMenu} text='Categorias'/>
      <DropdownMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
          <Categories />
      </DropdownMenu>
    </div>
  );
};

export default MenuController;