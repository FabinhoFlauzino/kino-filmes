"use client"

import { useEffect, useState } from "react"
import Flex from "../template/Flex"
import useMovieAPI from "@/hooks/useMovieAPI"
import mergeClasses from "@/utils/mergeClasses"

interface GenerosProps {
  idFilme: string
  grande?: boolean
}

export default function Generos({ idFilme, grande }: GenerosProps) {
  const [generos, setGeneros] = useState<Genero[]>([])
  const { getGenerosFilme } = useMovieAPI()

  useEffect(() => {
    getGenerosFilme(idFilme).then(setGeneros)
  }, [])


  return (
    <Flex className="flex-wrap justify-start">
      {
        generos.map((genero) => (
          <span key={genero.id} className={mergeClasses(
            "bg-red-kino/50 font-semibold backdrop-blur-md p-1 rounded-lg text-xs",
            { 'text-lg': grande }
          )}>{genero.nome}</span>
        ))
      }
    </Flex>
  )
}