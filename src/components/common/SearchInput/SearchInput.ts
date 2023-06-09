import { ComponentPropsWithoutRef } from "react";

export default interface SearchInputType {
  value?: string;
  onSubmit: (value: string) => void;
  inputProps?: Omit<ComponentPropsWithoutRef<"input">, 'value'>;
  buttonProps?: Omit<ComponentPropsWithoutRef<"button">, 'type'>;
}