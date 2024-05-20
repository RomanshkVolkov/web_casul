"use client";

import { serializedFiltersOptions } from "@/app/utils/serializers/catalog-serializer";
import { setFilters } from "@/lib/store/catalog/catalog-slice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import CatalogTypes from "@/types/catalog-types";
import { Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface Props {
  id: string;
  name: CatalogTypes["CatalogFiltersKeys"];
  placeholder: string;
  options: CatalogTypes["SelectItem"][];
  className?: string;
  ariaLabel?: string;
  size?: "sm" | "md" | "lg";
}

export default function FilterSelect({
  id,
  name,
  placeholder,
  options,
  className,
  ariaLabel,
  size,
}: Props) {
  const { filters } = useAppSelector((state) => state.catalog);
  const [value, setValue] = useState<Set<number | string>>(() => {
    const currentStoreValue = filters[name];
    if (typeof currentStoreValue === "number" && currentStoreValue > 0) {
      return new Set([currentStoreValue]);
    }
    return new Set([]);
  });
  const dispatch = useAppDispatch();

  const handleChange = (value: Set<string>) => {
    const serializedValue = Number(value.values().next().value);
    dispatch(setFilters({ key: name, value: serializedValue }));
    setValue(value);
  };

  useEffect(() => {
    const currentStoreValue = filters[name];
    if (typeof currentStoreValue === "number" && currentStoreValue === 0) {
      setValue(new Set([]));
    }
  }, [filters, name]);

  return (
    <Select
      id={id}
      size={size}
      placeholder={placeholder}
      className={className}
      aria-label={ariaLabel}
      selectedKeys={value}
      onSelectionChange={(value) => handleChange(value as Set<string>)}
    >
      {serializedFiltersOptions(options, name, filters).map((option: any) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}
