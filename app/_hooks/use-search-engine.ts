import * as React from "react";

function useSearchEngine() {
  const [isOpen, setIsOpen] = React.useState(false);

  const [type, setType] = React.useState<"DATE" | "GUEST" | "">("DATE");

  const [searchEngineState, setSearchEngineState] = React.useState<{
    checkIn: Date | undefined;
    checkOut: Date | undefined;
    guests: number | undefined;
  }>({
    checkIn: undefined,
    checkOut: undefined,
    guests: undefined,
  });

  const handleOpenChange = (
    open: boolean,
    type: "DATE" | "GUEST",
    checkIn?: Date | undefined,
    checkOut?: Date | undefined,
    guests?: number | undefined
  ) => {
    setIsOpen(open);
    setType(type);
    setSearchEngineState({
      checkIn: checkIn || undefined,
      checkOut: checkOut || undefined,
      guests: guests || undefined,
    });
  };

  return {
    type,
    setType,
    isOpen,
    handleOpenChange,
    setIsOpen,
    searchEngineState,
    setSearchEngineState,
  };
}

export default useSearchEngine;
