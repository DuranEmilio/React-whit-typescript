import { Item } from '../../interfaces/Interface'

interface CategoryListProps {
    categories: Item[];
}

function CategoryList({ categories }: CategoryListProps) {
    return (
        <ul>
            {categories.map((category) => (
                <li key={category.id}>
                    <span style={{ color: category.color }}>{category.name}</span>
                </li>
            ))}
        </ul>
    )
}

export default CategoryList;