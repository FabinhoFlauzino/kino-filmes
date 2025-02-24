"use client"
import Wrap from "@/components/template/Wrap"
import useMovieAPI from "@/hooks/useMovieAPI"
import { useEffect, useState } from "react"

export default function Filmes() {
  const [filmes, setFilmes] = useState<Filme[]>([])
  const { getUltimosFilmes } = useMovieAPI()

  useEffect(() => {
    getUltimosFilmes().then(setFilmes)
  }, [])

  return (
    <Wrap>
      {JSON.stringify(filmes, null, 6)}
    </Wrap>
  )
}