"use client";
import Cover from "@/components/ui/cover";
import SearchEngine from "@/components/ui/search-engine";
import SearchEngineModal from "@/components/ui/search-engine-modal";
import * as React from "react";
import { useIsMobile } from "./_hooks/use-is-mobile";
import useSearchEngine from "./_hooks/use-search-engine";

export default function Home() {
  const isMobile = useIsMobile();

  const { isOpen, setIsOpen, type, handleOpenChange, setSearchEngineState } =
    useSearchEngine();

  return (
    <React.Fragment>
      {isMobile ? (
        <React.Fragment>
          <Cover.Mobile />
          <SearchEngine.Mobile handleOpenChange={handleOpenChange} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Cover.Web />
          <SearchEngine.Web />
        </React.Fragment>
      )}
      <SearchEngineModal
        title={type === "DATE" ? "Select dates" : "Guests & rooms"}
        type={type}
        setSearchEngineState={setSearchEngineState}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </React.Fragment>
  );
}
