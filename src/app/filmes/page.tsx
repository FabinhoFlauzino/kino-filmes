"use client"
import CardFilmeEmDestque from "@/components/filmes/CardFilmeEmDestque"
import Carrossel from "@/components/template/Carrossel"
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
      <Carrossel slideAutomatico>
        {filmes.map((filme) => (
          <CardFilmeEmDestque 
            key={filme.id}
            filme={filme}
          />
        ))}
      </Carrossel>
    </Wrap>
  )
}