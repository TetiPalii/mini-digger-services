import { cn } from '@/lib/utils';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className, id = '' }) => {
    return <section className={className ? className : "relative hero flex flex-col justify-center w-full c pt-[130px] px-0 pb-4 min-h-screen"} id={id}>
        {children}
    </section>
}