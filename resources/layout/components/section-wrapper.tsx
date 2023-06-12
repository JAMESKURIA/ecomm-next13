import { cn } from "@/lib/utils";
import React from "react";

type SectionWrapperProps = {
    children: React.ReactNode;
    title?: string;
    className?: string;
};

export const SectionWrapper = ({
    children,
    title,
    className,
}: SectionWrapperProps) => {
    return (
        <section className={cn("mx-auto max-w-[100rem] py-10 px-5", className)}>
            {!!title ? <h3 className="title">{title}</h3> : null}
            {children}
        </section>
    );
};
