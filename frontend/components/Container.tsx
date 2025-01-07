import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function Container({ children, className, ...rest }: ContainerProps) {
    const containerClasses = [
        'mx-auto',
        'max-w-screen-xl',
        'px-4',
        'sm:px-6',
        'lg:px-8',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={containerClasses} {...rest}>
            {children}
        </div>
    );
}
