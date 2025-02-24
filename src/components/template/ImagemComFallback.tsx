"use client"
import { useEffect, useState } from "react"
import Flex from "./Flex"
import Image from "next/image"
import mergeClasses from "@/utils/mergeClasses"

interface ImagemComFallbackProps {
  url: string
  imgAlt: string
  className?: string
  children: React.ReactNode
}

export default function ImagemComFallback({ url, imgAlt, className, children }: ImagemComFallbackProps) {
  const [imagemPadrao, setImagemPadrao] = useState(false)

  useEffect(() => {
    fetch(url).then(res => setImagemPadrao(!res.ok))
  }, [])

  if(imagemPadrao || !url) {
    return (
      <Flex col className="h-full w-full absolute -z-30">
        {children}
      </Flex>
    )
  }

  return (
    <Image src={url}  fill alt={imgAlt} className={mergeClasses("object-cover", className)} sizes="80vw"/>
  )
}