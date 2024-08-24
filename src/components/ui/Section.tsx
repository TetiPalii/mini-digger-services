import { cn } from '@/lib/utils';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id = '' }) => {
    return <section className={`flex flex-col justify-center items-center w-full py-10 min-h-screen ${className}`} id={id}>
        {children}
    </section>
}