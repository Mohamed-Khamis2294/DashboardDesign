import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./modeToggle";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      {/* left side : collabseButton */}
      <SidebarTrigger/>
      {/* rightSide */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
         <ModeToggle/> 
        <DropdownMenu>
          <DropdownMenuTrigger >
        <Avatar >
          <AvatarImage src="/globe.svg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator/>
          <DropdownMenuItem>
            <User className="h-[1.2rem] w-[1.2rem] mr-2"/>
            profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="h-[1.2rem] w-[1.2rem] mr-2"/>
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive">
            <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
            Logout
          </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
