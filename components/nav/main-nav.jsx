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
import ListLink from "./nav-dropdown-link"

import { cn } from "@/lib/utils"

export default function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base cursor-default">Lorem</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-2">
              <ListLink href="/about" legacyBehavior passHref>
                About
              </ListLink>
              <ListLink href="/faq" legacyBehavior passHref>
                Faq
              </ListLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/sign-up" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-base")}>
              Sign up
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}