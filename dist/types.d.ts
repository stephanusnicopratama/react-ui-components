import React$1, { ButtonHTMLAttributes, ReactNode, HTMLAttributes, InputHTMLAttributes, TableHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    fullWidth?: boolean;
    className?: string;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    size?: "s" | "default";
}

declare const Button: ({ children, fullWidth, variant, className, icon, iconPosition, size, ...rest }: ButtonProps) => React$1.JSX.Element;

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    type?: 'nude' | 'elevated';
}
interface CardTitleProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}
interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

declare const CardTitle: ({ children, className, ...rest }: CardTitleProps) => React$1.JSX.Element;
declare const CardBody: ({ children, className, ...rest }: CardBodyProps) => React$1.JSX.Element;
declare const CardFooter: ({ children, className, ...rest }: CardFooterProps) => React$1.JSX.Element;
declare const Card: ({ children, className, type, ...rest }: CardProps) => React$1.JSX.Element;

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
    autoPlay?: boolean;
    interval?: number;
    showArrows?: boolean;
    showDots?: boolean;
}

declare const Carousel: ({ children, autoPlay, interval, showArrows, showDots, className, }: CarouselProps) => React$1.JSX.Element;

interface CheckboxOption {
    label: string;
    value: string;
    disabled?: boolean;
}
interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
    options: CheckboxOption[];
    value?: string[];
    onChange?: (value: string[]) => void;
    label?: string;
    direction?: "vertical" | "horizontal";
}

declare const CheckboxGroup: ({ options, value, onChange, label, direction, className, }: CheckboxGroupProps) => React$1.JSX.Element;

interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    variant?: "default" | "outline" | "filled";
    fullWidth?: boolean;
    error?: boolean;
    helperText?: string;
    label?: string;
}

declare const DatePicker: ({ variant, fullWidth, error, helperText, label, className, ...rest }: DatePickerProps) => React$1.JSX.Element;

interface DropdownOption {
    value: string;
    label: string;
    icon?: ReactNode;
    disabled?: boolean;
}
interface DropdownProps {
    options: DropdownOption[];
    placeholder?: string;
    label?: string;
    error?: boolean;
    helperText?: string;
    variant?: "default" | "outline" | "filled";
    fullWidth?: boolean;
    disabled?: boolean;
    onChange?: (value: string | string[]) => void;
    value?: string | string[];
    className?: string;
    searchable?: boolean;
    searchPlaceholder?: string;
    multiple?: boolean;
}

declare const Dropdown: ({ options, placeholder, label, error, helperText, variant, fullWidth, disabled, onChange, value, className, searchable, searchPlaceholder, multiple, }: DropdownProps) => React$1.JSX.Element;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: "default" | "outline" | "filled";
    fullWidth?: boolean;
    error?: boolean;
    helperText?: string;
    label?: string;
}

declare const Input: ({ variant, fullWidth, error, helperText, label, className, ...rest }: InputProps) => React$1.JSX.Element;

interface ModalProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    className?: string;
    style?: React.CSSProperties;
    backdropClassName?: string;
    backdropStyle?: React.CSSProperties;
    containerClassName?: string;
    containerStyle?: React.CSSProperties;
    closeOnBackdropClick?: boolean;
    closeOnEscapeKey?: boolean;
    closeOnOutsideClick?: boolean;
    disableBackdrop?: boolean;
    disablePortal?: boolean;
    disableScrollLock?: boolean;
    disableTransition?: boolean;
    focusOnOpen?: boolean;
    lockFocus?: boolean;
    modalClassName?: string;
    modalStyle?: React.CSSProperties;
    onBackdropClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onEscapeKey?: (event: KeyboardEvent) => void;
    onOutsideClick?: (event: MouseEvent) => void;
    onOpen?: () => void;
    portalClassName?: string;
    portalStyle?: React.CSSProperties;
    role?: string;
    zIndex?: number;
}

interface ModalTitleProps {
    children?: React$1.ReactNode;
}
interface ModalBodyProps {
    children?: React$1.ReactNode;
}
interface ModalFooterProps {
    children?: React$1.ReactNode;
}
declare const ModalTitle: ({ children }: ModalTitleProps) => React$1.JSX.Element;
declare const ModalBody: ({ children }: ModalBodyProps) => React$1.JSX.Element;
declare const ModalFooter: ({ children }: ModalFooterProps) => React$1.JSX.Element;
declare const Modal: ({ children, open, onClose, closeOnBackdropClick, closeOnEscapeKey, closeOnOutsideClick, onBackdropClick, onEscapeKey, onOutsideClick, backdropClassName, backdropStyle, modalClassName, modalStyle, zIndex, }: ModalProps) => React$1.ReactPortal | null;

interface RadioOption {
    label: string;
    value: string;
    disabled?: boolean;
}
interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
    options: RadioOption[];
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    direction?: "vertical" | "horizontal";
    name?: string;
}

declare const RadioGroup: ({ options, value, onChange, label, direction, name, className, }: RadioGroupProps) => React$1.JSX.Element;

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "text" | "circle" | "rect";
    width?: number | string;
    height?: number | string;
    count?: number;
}

declare const Skeleton: ({ variant, width, height, count, className, ...rest }: SkeletonProps) => React$1.JSX.Element;

interface SpinnerProps {
    size?: "small" | "medium" | "large";
    color?: string;
    className?: string;
}

declare const Spinner: ({ size, color, className, }: SpinnerProps) => React$1.JSX.Element;

interface TableColumn {
    key: string;
    header: string;
    width?: string;
    align?: "left" | "center" | "right";
}
interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    columns: TableColumn[];
    data: Record<string, any>[];
    striped?: boolean;
    bordered?: boolean;
    hoverable?: boolean;
    fullWidth?: boolean;
}

declare const Table: ({ columns, data, striped, bordered, hoverable, fullWidth, className, ...rest }: TableProps) => React$1.JSX.Element;

interface TabItem {
    label: string;
    content: ReactNode;
    disabled?: boolean;
}
interface TabsProps {
    tabs: TabItem[];
    defaultActiveTab?: number;
    variant?: "default" | "underline" | "pills";
    fullWidth?: boolean;
    className?: string;
}

declare const Tabs: ({ tabs, defaultActiveTab, variant, fullWidth, className, }: TabsProps) => React$1.JSX.Element;

type TagStatus = "success" | "failed" | "pending";
interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    status?: TagStatus;
}

declare const Tag: ({ children, status, className }: TagProps) => React$1.JSX.Element;

interface TextProps extends HTMLAttributes<HTMLParagraphElement | HTMLLabelElement> {
    as?: keyof Pick<JSX.IntrinsicElements, "p" | "label">;
    bold?: boolean;
    className?: string;
    textAlignCenter?: boolean;
    onClick?: () => void;
    color?: "primary" | "error" | "secondary" | "disabled";
    fontSize?: "xs" | "s" | "default" | "l";
    htmlFor?: string;
}

declare const Text: ({ children, bold, className, textAlignCenter, color, onClick, fontSize, as: As, htmlFor, ...rest }: TextProps) => React$1.JSX.Element;

type ToastType = "success" | "error" | "info" | "warning";
type ToastPosition = "top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center";
interface ToastProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    type?: ToastType;
    duration?: number;
    position?: ToastPosition;
}

declare const Toast: ({ open, onClose, title, description, type, duration, position, className, }: ToastProps) => React$1.ReactPortal | null;

interface TooltipProps {
    children: ReactNode;
    content: string;
    position?: "top" | "bottom" | "left" | "right";
    className?: string;
}

declare const Tooltip: ({ children, content, position, className, }: TooltipProps) => React$1.JSX.Element;

export { Button, Card, CardBody, CardFooter, CardTitle, Carousel, CheckboxGroup, DatePicker, Dropdown, Input, Modal, ModalBody, ModalFooter, ModalTitle, RadioGroup, Skeleton, Spinner, Table, Tabs, Tag, Text, Toast, Tooltip };
