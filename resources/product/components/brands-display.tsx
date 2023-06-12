import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { SectionWrapper } from "@/resources/layout";

type BrandItemProps = {};

export const BrandsDisplay = () => {
    return (
        <SectionWrapper title="Choose By Brand">
            <div
                className={
                    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-3"
                }
            >
                {Array.from(Array(4).keys()).map((i) => (
                    <BrandItem key={`brand-${i}`} />
                ))}
            </div>
        </SectionWrapper>
    );
};

const BrandItem = ({}: BrandItemProps) => {
    return (
        <Card className="flex flex-row items-center py-0 sm:py-2 px-3 sm:px-5 bg-secondary">
            <Avatar className="h-20 w-20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardHeader>
                <CardTitle className="text-xl">Staples</CardTitle>
                <CardDescription className="text-lg">
                    Delivery with in 24 hours
                </CardDescription>
            </CardHeader>
        </Card>
    );
};
