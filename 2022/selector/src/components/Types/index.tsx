// types
export type SelectOption = {
  label: string;
  value: string | number;
};

export type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

export type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

export type ClearOptionsFunction = {
  multiple?: boolean;
  onChange: (value: SelectOption[] | SelectOption | undefined) => void;
};
