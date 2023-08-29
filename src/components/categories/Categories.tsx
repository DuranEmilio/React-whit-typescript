import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import CategoryList from './CategoryList';
import { Item } from '../../interfaces/Interface';

function Categories() {
    const [categories, setCategories] = useState<Item[]>([])

    useEffect (() => {
        async function getCategories() {
            const querySnapshot = await getDocs(collection(db, 'categories'));
            const categories: Item[] = [];
            querySnapshot.forEach((doc) => {
                categories.push({ id: doc.id, ...doc.data()} as Item);
            });
            setCategories(categories);
        }
        getCategories();
    }, []);

    return (
        <div>
            <h2>Categorias Actuales </h2>
            <CategoryList categories={categories} />
        </div>
    )
}

export default Categories;