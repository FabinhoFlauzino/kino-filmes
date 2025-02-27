"use client"

import { useEffect, useState } from "react"
import ListaFilmes from "../filmes/ListaFilmes"
import Container from "./Container"
import useMovieAPI from "@/hooks/useMovieAPI"

interface SugestoesFilmesProps {
  idFilme: string
}

export default function SugestoesFilmes({ idFilme }: SugestoesFilmesProps) {
  const [filmes, setFilmes] = useState<Filme[]>([])
  const { getFilmeSimilares } = useMovieAPI()

  useEffect(() => {
    getFilmeSimilares(idFilme).then(setFilmes)
  }, [])

  return (
    <Container className="my-16 bg-neutral-900 rounded-lg lg:pt-10">
      <ListaFilmes filmes={filmes} titulo="Recomendações" />
    </Container>
  )
}