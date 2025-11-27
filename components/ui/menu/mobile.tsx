import BurgerIcon from "@/components/svg/burger-icon";
import Logo from "@/components/svg/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function MobileMenu() {
  return (
    <div className="p-4 flex items-center justify-between">
      <Logo />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <BurgerIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {Array.from({ length: 7 }).map((_, index) => (
            <DropdownMenuItem key={index}>Menu {index + 1}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default MobileMenu;
