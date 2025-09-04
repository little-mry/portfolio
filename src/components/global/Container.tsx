import type { ComponentPropsWithoutRef, ElementType } from "react";

type Props<E extends ElementType> = {
  as?: E;
  className?: string;
} & Omit<ComponentPropsWithoutRef<E>, "as" | "classname">;

export default function Container<E extends ElementType = "div">({
  as,
  className,
  ...rest
}: Props<E>) {
  const Tag = (as || "div") as ElementType;
  const base = "w-full max-w-7xl mx-auto px-4 md:px-6 ";
  return (
    <Tag className={[base, className].filter(Boolean).join(" ")} {...rest} />
  );
}
