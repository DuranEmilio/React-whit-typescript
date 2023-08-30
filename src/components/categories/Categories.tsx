import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import CategoryList from './CategoryList';
import { Item } from '../../interfaces/Interface';
import PrimaryButton from '../PrimaryButton';
import AddCategory from './AddCategory';
import styles from './categories.module.css'

function Categories() {
    const [categories, setCategories] = useState<Item[]>([])
    const [openAddCategory, setOpenAddCategory] = useState(false);

    const toggleCategories = () => {
        setOpenAddCategory(!openAddCategory)
    }

    const saveCategory = () => {

    }

    useEffect(() => {
        async function getCategories() {
            const querySnapshot = await getDocs(collection(db, 'categories'));
            const categories: Item[] = [];
            querySnapshot.forEach((doc) => {
                categories.push({ id: doc.id, ...doc.data() } as Item);
            });
            setCategories(categories);
        }
        getCategories();
    }, []);

    return (
        <div>
            {openAddCategory ? (
                <div>
                    <div className={styles.header}>
                        <h2>Categorias</h2>
                        <PrimaryButton text='Nueva Categoria' onClick={toggleCategories} />
                    </div>
                    <CategoryList categories={categories} />
                </div>
            ) : (
                <div>
                    <div className={styles.header}>
                        <PrimaryButton onClick={toggleCategories} text='X'/>
                        <h2>Crear Categoria</h2>
                        <PrimaryButton text='Guardar' onClick={saveCategory} />
                    </div>
                    <AddCategory />
                </div>
            )}
        </div>
    )
}

export default Categories;