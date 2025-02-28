"use client"

import { useEffect, useState } from "react"
import Flex from "../template/Flex"
import useMovieAPI from "@/hooks/useMovieAPI"
import mergeClasses from "@/utils/mergeClasses"
import Skeleton from "../template/Skeleton"

interface GenerosProps {
  idFilme: string
  grande?: boolean
  generosPadrao?: Genero[]
}

export default function Generos({ idFilme, grande, generosPadrao }: GenerosProps) {
  const [generos, setGeneros] = useState<Genero[] | null>(null)
  const { getGenerosFilme } = useMovieAPI()

  useEffect(() => {

    if (generosPadrao && generosPadrao.length > 0) {
      setGeneros(generosPadrao)
      return
    }

    getGenerosFilme(idFilme).then(setGeneros)
  }, [])

  if (!generos) {
    return (
      <Flex className="flex-wrap justify-start">
        {Array(4).fill(0).map((_, index) => (
          <Skeleton key={index} className="rounded-lg h-8 w-24"/>
        ))}
      </Flex>
    )
  }

  return (
    <Flex className="flex-wrap justify-start">
      {generos.map((genero) => (
        <span key={genero.id} className={mergeClasses(
          "bg-red-kino/50 font-semibold backdrop-blur-md p-1 rounded-lg text-xs",
          { 'text-lg': grande }
        )}>{genero.nome}</span>
      ))}
    </Flex>
  )
}