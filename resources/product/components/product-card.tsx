"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import { Flex, Rating } from "@mantine/core";
import Image from "next/image";
import { categories } from "../data";

export const ProductCard = () => {
    return (
        <Card className="overflow-hidden ">
            <div className="relative h-56 sm:h-60 md:h-64 lg:h-72 w-full ">
                <Image
                    src={categories[3].image}
                    fill
                    alt="faqs"
                    className="aspect-square object-cover"
                />
                <Icons.heart className="absolute top-4 right-4 rounded-full z-10 bg-secondary p-2 h-10 w-10" />
            </div>
            <CardContent className="pt-5">
                <CardTitle className="font-semibold text-2xl ">
                    Homepod mini
                </CardTitle>
                <CardDescription className="text-lg text-primary py-2">
                    Table with air purifier, stained veneer/black
                </CardDescription>
                <Flex dir="row" gap={5} align="center">
                    <Rating defaultValue={2} />
                    <span>(345)</span>
                </Flex>
            </CardContent>
            <CardFooter>
                <Button variant={"outline"} size={"xl"} className="text-lg">
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
};
