"use client"

import { Switch } from "@/components/ui/switch"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

import { cn } from "@/lib/utils"

export default function ThemeSwitch({className}) {
  const { theme, setTheme } = useTheme();
  const [ isMounted, setMounted ] = useState(false)

  function switchTheme() {
    theme == "dark" ? setTheme("light") : setTheme("dark")
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className={cn(className, "flex")}>
        <Image
          src="/icons/sun.svg"
          alt="Sun"
          className="dark:invert opacity-10"
          width={20}
          height={20}
          priority
        />
        <Switch className="mx-1" onClick={switchTheme} disabled/>
        <Image
          src="/icons/moon.svg"
          alt="Moon"
          className="dark:invert opacity-10"
          width={16}
          height={16}
          priority
        />
      </div>
    )
  }

  return (
    <div className={cn(className, "flex")}>
      <Image
        src="/icons/sun.svg"
        alt="Sun"
        className="dark:invert"
        width={20}
        height={20}
        priority
      />
      <Switch className="mx-1" onClick={switchTheme} checked={theme == "dark"}/>
      <Image
        src="/icons/moon.svg"
        alt="Moon"
        className="dark:invert"
        width={16}
        height={16}
        priority
      />
    </div>
  )
}