"use client";

import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { useTheme } from "@/contexts/theme";

const ViewVariantStyle = {
  primary: styles.primary,
  secondary: styles.secondary,
  inline: styles.inline,
  inlineDark: styles.inlineDark,
};

const ThemeStyle = {
  default: styles.default,
  alternative: styles.alternative,
};

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  viewVariant = "primary",
}) => {
  const theme = useTheme();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        styles.root,
        className,
        ViewVariantStyle[viewVariant],
        ThemeStyle[theme],
        {
          [styles.disabled]: disabled,
        }
      )}
    >
      {children}
    </button>
  );
};
