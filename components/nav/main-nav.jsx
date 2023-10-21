"use client"

import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import ListItem from "./nav-dropdown-item"

import { cn } from "@/lib/utils"

export default function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base cursor-default">Lorem</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-2">
              <ListItem href="/docs">
                Dolor
              </ListItem>
              <ListItem href="/docs/installation">
                Sit amet
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-base")}>
              Ipsum
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}