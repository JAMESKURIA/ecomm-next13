import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/resources/layout";
import {
    BestDeals,
    BrandsDisplay,
    CategoriesList,
    ProductsOnOffer,
    categories,
} from "@/resources/product";
import { Services } from "@/resources/services";

export default function Home() {
    return (
        <>
            <div className="bg-blue-200">
                <SectionWrapper className="wrap-section h-[65vh] xl:h-[80vh] flex flex-col gap-4 xl:gap-8 justify-center">
                    <h3 className="capitalize text-3xl sm:text-5xl md:text-7xl font-bold flex flex-col">
                        <span>Shopping and</span>
                        <span>department store.</span>
                    </h3>
                    <p className="font-normal text-primary text-lg sm:text-xl lg:text-3xl w-3/4 xl:w-1/2">
                        Shopping is a bit of a relaxing hobby for me, which is
                        sometimes troubling for the bank balance.
                    </p>
                    <Button
                        variant={"default"}
                        size={"xl"}
                        className="w-fit text-xl font-semibold"
                    >
                        Learn More
                    </Button>
                </SectionWrapper>
            </div>

            {/* Categories */}
            <CategoriesList categories={categories} />

            {/* Best Deals */}
            <BestDeals />

            {/* Brands */}
            <BrandsDisplay />

            {/* Products on offer */}
            <ProductsOnOffer />

            {/* Services section */}
            <Services />

            {/* Table */}
            {/* <Table /> */}
        </>
    );
}
