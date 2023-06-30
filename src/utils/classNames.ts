export const classNames = (...className: any[]): string => {
    return className.filter(Boolean).join(" ");
};
