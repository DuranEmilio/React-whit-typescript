import { Item } from '../../interfaces/Interface'
import styles from './categoryList.module.css'

interface CategoryListProps {
    categories: Item[];
}

function CategoryList({ categories }: CategoryListProps) {
    const getInitials = (text: string) => text.substring(0, 3);

    return (
        <ul>
            {categories.map((category) => (
                <div className={styles.list} key={category.id}>
                    <div className={styles.ResumeCategory} style={{ backgroundColor: category.color }}>
                        <div>{getInitials(category.name)}</div>
                    </div>
                    <p>{category.name}</p>
                    <div className={styles.drag}>|||</div>
                </div>
            ))}
        </ul>
    )
}

export default CategoryList;