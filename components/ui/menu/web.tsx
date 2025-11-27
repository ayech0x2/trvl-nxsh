import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
function WebMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Array.from({ length: 7 }).map((_, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink>Menu {index + 1}</NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default WebMenu;
