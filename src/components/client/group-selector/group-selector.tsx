"use client";

import { Select } from "@mwolfart/cobalt-ui";

type Props = {
  availableOptions: string[];
  onSelect: (id: string) => void;
};

export const GroupSelector = ({ availableOptions, onSelect }: Props) => {
  return (
    <Select
      options={availableOptions.map((option) => ({
        value: option,
        label: option,
      }))}
      onChange={(e) => onSelect(e.target.value)}
    />
  );
};
