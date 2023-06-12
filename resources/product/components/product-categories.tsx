import { SectionWrapper } from "@/resources/layout";
import Image from "next/image";
import { Category } from "../typings";

type CategoryItemProps = {
    category: Category;
};

type CategoryListProps = {
    categories: Category[];
};

export const CategoriesList = ({ categories }: CategoryListProps) => {
    return (
        <SectionWrapper
            title="Shop our top Categories"
            className="py-10 wrap-section"
        >
            <div
                className={
                    "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3"
                }
            >
                {categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))}
            </div>
        </SectionWrapper>
    );
};

function CategoryItem({ category }: CategoryItemProps) {
    return (
        <div className="relative h-48 sm:h-56 md:h-60 lg:h-64 w-full ">
            <Image
                className="rounded-xl aspect-square"
                src={category.image}
                fill
                alt="Picture of the product"
            />
            <h3 className="absolute top-3 left-3 font-bold text-primary-foreground text-xl md:text-2xl">
                {category.name}
            </h3>
        </div>
    );
}
