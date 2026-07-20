import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { PlusIcon, WorkflowIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const workflows = [
  "dominant-wasp",
  "honest-reindeer",
  "expected-llama",
  "essential-ocelot",
  "creepy-echidna",
  "eastern-silkworm",
  "cultural-lion",
  "proud-weasel",
  "regional-bonobo",
]

export function AppSidebar() {
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center justify-between gap-2">
          <OrganizationSwitcher
            hidePersonal
            appearance={{
              elements: {
                rootBox: "min-w-0 group-data-[collapsible=icon]:!hidden",
                organizationSwitcherTrigger: "w-full justify-center",
              },
            }}
          />
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workflows</SidebarGroupLabel>
          <SidebarGroupAction title="New workflow">
            <PlusIcon />
            <span className="sr-only">New workflow</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu className="gap-y-1">
              {workflows.map((workflow, index) => (
                <SidebarMenuItem key={workflow}>
                  <SidebarMenuButton isActive={index === 0} tooltip={workflow}>
                    <WorkflowIcon />
                    <span>{workflow}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserButton />
      </SidebarFooter>
    </Sidebar>
  )
}
