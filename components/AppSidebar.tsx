import { Calendar, ChevronDown, ChevronUp, Home, Inbox, Plus, Projector, Search, Settings, User2 } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "./ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Collapsible, CollapsibleContent } from "./ui/collapsible"
import { CollapsibleTrigger } from "@radix-ui/react-collapsible"

const items=[
{
  title:'Home',
  url:'/',
  icon:Home
},
{
  title:'Inbox',
  url:'/',
  icon:Inbox
},
{
  title:'Calendar',
  url:'/',
  icon:Calendar
},
{
  title:'Search',
  url:'/',
  icon:Search
},
{
  title:'Settings',
  url:'/',
  icon:Settings
},
]
const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" side="left">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href='/'>
                <Image src={'/globe.svg'} alt="" width={20} height={20}/>
                <span>Miso Dev</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator/>
      <SidebarContent>
      <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                      {item.title==='Inbox'&&(
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                    )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Collapsible defaultOpen className="group/collapsible">
        <SidebarGroup>
          <SidebarGroupLabel asChild>
          <CollapsibleTrigger>
            Projects
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
          </SidebarGroupLabel>
          {/* <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction> */}
          <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                <Link href={'/'}>
                  <Projector/>
                  See All Projects
                </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                <Link href={'/'}>
                  <Plus/>
                  Add Project
                </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
        </Collapsible>

       
      </SidebarContent>
      <SidebarFooter >
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2/>miso2<ChevronUp className="ml-auto"/>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar