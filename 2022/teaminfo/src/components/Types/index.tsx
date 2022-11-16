import { ReactElement, ReactNode } from "react";

// types
export type BasicPropsComponent = {
  children?: ReactNode | ReactElement | string;
  className?: string;
};
export type ButtonProps = {
  children: ReactNode | ReactElement | string;
  onClick: () => void;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

export type CardProps = {
  children: ReactNode | ReactElement | string;
  className?: string;
};

export type ItemProps = {
  to?: string;
  className?: string;
  children: ReactNode | ReactElement | string;
};

export type ListProps = {
  items: ItemProps[];
  className?: string;
};
