import { SectionWrapper } from "@/resources/layout";
import { ProductCard } from "./product-card";

export const BestDeals = () => {
    return (
        <SectionWrapper title="Todays Best Deals For You!">
            <div
                className={
                    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3"
                }
            >
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </SectionWrapper>
    );
};
