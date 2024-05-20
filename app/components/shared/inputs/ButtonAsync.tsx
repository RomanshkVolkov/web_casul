"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";

interface Props {
  asyncAction: () => Promise<void>;
  className?: string;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}
export default function ButtonAsync({
  asyncAction,
  className,
  children,
  size,
}: Props) {
  const [loading, setLoading] = useState(false);

  const handleAsyncAction = async () => {
    setLoading(true);
    try {
      await asyncAction();
    } catch (error) {
      console.info(error);
    }
    setLoading(false);
  };

  return (
    <Button
      className={className}
      onClick={handleAsyncAction}
      disabled={loading}
      isLoading={loading}
      radius="md"
      size={size}
    >
      {children}
    </Button>
  );
}
