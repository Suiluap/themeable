import * as React from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";

import { cn } from "@/lib/utils";

const ListLink = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <li>
      <Link {...props} ref={ref}>
        <NavigationMenuLink
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer",
            className
          )}
          asChild
        >
          <div className="text-sm font-medium leading-none whitespace-nowrap">
            {children}
          </div>
        </NavigationMenuLink>
      </Link>
    </li>
  );
});
ListLink.displayName = "ListLink";

export default ListLink;
