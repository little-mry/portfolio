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
  const base = "w-full";
  return (
    <Tag className={[base, className].filter(Boolean).join(" ")} {...rest} />
  );
}
