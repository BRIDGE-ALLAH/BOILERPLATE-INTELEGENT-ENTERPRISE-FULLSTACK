// RouterLink - Universal link component
import { forwardRef } from "react";
import type { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";

export type RouterLinkProps = LinkProps &
  Partial<{ children: React.ReactNode }> & {
    className?: string;
  };

export const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => {
  const { href, className, children, ...other } = props;
  return (
    <Link ref={ref} href={href} className={className} {...other}>
      {children}
    </Link>
  );
});
