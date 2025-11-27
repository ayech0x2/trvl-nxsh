"use client";
import CalendarIcon from "@/components/svg/calendar-icon";
import PeopleIcon from "@/components/svg/people-icon";
import { cn } from "@/lib/utils";
import { Button } from "../button";

const MobileSearchEngine = ({
  handleOpenChange,
}: {
  handleOpenChange: (open: boolean, type: "DATE" | "GUEST") => void;
}) => {
  return (
    <div className="relative z-1 m-6 p-6 bg-gray-100 gap-6 flex flex-col translate-y-[-50%] rounded-xl">
      <div className="rounded-md shadow-xl/5">
        <ButtonItem
          onClick={() => {
            handleOpenChange(true, "DATE");
          }}
          className="border-b border-gray-200 rounded-tr-xl rounded-tl-xl"
          label="Check-in"
          value="24 Nov 2025"
        />
        <ButtonItem
          onClick={() => {
            handleOpenChange(true, "DATE");
          }}
          className="rounded-bl-xl rounded-br-xl"
          label="Check-out"
          value="25 Nov 2025"
        />
      </div>
      <ButtonItem
        onClick={() => {
          handleOpenChange(true, "GUEST");
        }}
        className="shadow-xl/5 rounded-xl"
        label="Guests"
        value="2 rooms, 4 adults"
        icon={<PeopleIcon />}
      />
      <Button className="w-full bg-[#0B2654] uppercase py-10 text-xl color-white font-bold">
        search
      </Button>
    </div>
  );
};

export default MobileSearchEngine;

const ButtonItem = ({
  label,
  value,
  onClick,
  icon,
  className,
}: {
  label: string;
  value: string;
  onClick: VoidFunction;
  icon?: React.ReactNode | undefined;
  className?: string | undefined;
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "w-full py-4 px-6 flex items-center justify-between bg-white",
        className
      )}
    >
      <div className="flex flex-col items-start">
        <span className="font-light color-gray-260">{label}</span>
        <span className="text-xl font-bold color-gray-260">{value}</span>
      </div>
      {icon || <CalendarIcon />}
    </button>
  );
};
