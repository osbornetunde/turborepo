import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

interface Props {
    primary?: boolean;
    size?: 'small' | 'large';
    label?: string;
    backgroundColor?: string;
}
declare const Button: ({ primary, label, size, backgroundColor, }: Props) => react_jsx_runtime.JSX.Element;

declare const Text: ({ value }: {
    value: string;
}) => react_jsx_runtime.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const NewButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

export { Button, ButtonProps, NewButton, Text };
