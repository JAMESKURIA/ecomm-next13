import { SectionWrapper } from "@/resources/layout";
import Image from "next/image";

export const Services = () => {
    return (
        <SectionWrapper>
            <h3 className="title">Services To Help You Shop</h3>
            <div
                className={
                    " grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3"
                }
            >
                {Array.from({ length: 3 }).map((_, i) => (
                    <ServiceCard key={`service-${i}`} />
                ))}
            </div>
        </SectionWrapper>
    );
};

function ServiceCard() {
    return (
        <div className="rounded-xl overflow-hidden bg-slate-100">
            <div className="p-5 flex flex-col gap-5 font-semibold lg:w-3/4">
                <h3 className="text-2xl font-bold space-y-1">
                    <span className="block">Frequently asked</span>
                    <span className="block">questions</span>
                </h3>
                <h4 className="text-xl text-primary space-y-1">
                    <span className="block">Updates on safe Shopping in</span>
                    <span className="block">our Stores</span>
                </h4>
            </div>
            <div className="relative h-56 sm:h-60 md:h-64 lg:h-72 w-full ">
                <Image
                    src={
                        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png"
                    }
                    fill
                    alt="faqs"
                    className="aspect-square object-cover"
                />
            </div>
        </div>
    );
}
