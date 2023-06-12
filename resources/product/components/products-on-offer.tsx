import { SectionWrapper } from "@/resources/layout";
import Image from "next/image";

export const ProductsOnOffer = () => {
    return (
        <SectionWrapper title="Get Up To 70% Off">
            <div
                className={
                    " grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3"
                }
            >
                {Array.from({ length: 3 }).map((_, i) => (
                    <OfferCard key={`offer-${i}`} />
                ))}
            </div>
        </SectionWrapper>
    );
};

function OfferCard() {
    return (
        <div className="rounded-xl overflow-hidden bg-slate-100">
            <div className="p-5 flex flex-col gap-5 font-semibold lg:w-3/4">
                <h3 className="text-2xl font-bold space-y-1">
                    <span className="block font-semibold">Save</span>
                </h3>
                <h3 className="text-4xl font-bold space-y-1">
                    <sup className="">$</sup>
                    <span className="">100</span>
                </h3>
                <h4 className="text-xl text-primary space-y-1">
                    <span className="block">Explore Our Furniture & Home</span>
                    <span className="block">Furnishing Range</span>
                </h4>
            </div>
            <div className="relative h-56 sm:h-60 md:h-64 lg:h-72 w-full ">
                <Image
                    src={
                        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png"
                    }
                    fill
                    alt="faqs"
                    className="aspect-square object-cover"
                />
            </div>
        </div>
    );
}
