import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./button";

function SearchEngineModal({
  isOpen,
  setIsOpen,
  title,
  type,
  setSearchEngineState,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  title: string;
  type: "DATE" | "GUEST" | "";
  setSearchEngineState: (state: {
    checkIn: Date | undefined;
    checkOut: Date | undefined;
    guests: number | undefined;
  }) => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} modal={true}>
      <DialogContent className="max-w-lg rounded-none h-full flex flex-col">
        <DialogTitle className="hidden" />
        <DialogDescription className="hidden" />
        <span className="text-2xl font-bold border-b border-gray-200 pb-4">
          {title}
        </span>
        {type === "DATE" ? (
          <Calendar
            mode="range"
            className="w-full rounded-md border-0 p-0"
            captionLayout="label"
            numberOfMonths={2}
            onSelect={(date) => {
              setSearchEngineState({
                checkIn: date?.from,
                checkOut: date?.to || undefined,
                guests: undefined,
              });
            }}
          />
        ) : null}
        <div className="overflow-y-auto pb-20">
          <div className="absolute bottom-6 left-0 w-full justify-center px-10">
            <Button
              onClick={() => {
                setIsOpen(false);
              }}
              className="w-full bg-[#0B2654] uppercase py-8 text-xl color-white font-bold mt-4"
            >
              Confirm
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SearchEngineModal;
