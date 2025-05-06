"use client";

import { Select } from "@mwolfart/cobalt-ui";

type Props = {
  availableOptions: string[];
  value?: string;
  onSelect: (id: string) => void;
};

export const GroupSelector = ({ availableOptions, value, onSelect }: Props) => {
  return (
    <Select
      options={availableOptions.map((option) => ({
        value: option,
        label: option,
      }))}
      value={value}
      onChange={(e) => onSelect(e.target.value)}
    />
  );
};
