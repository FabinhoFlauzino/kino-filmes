"use client"

import CardFilmeDetalhado from "@/components/filmes/CardFilmeDetalhado"
import Elenco from "@/components/filmes/Elenco"
import SugestoesFilmes from "@/components/template/SugestoesFilmes"
import Wrap from "@/components/template/Wrap"
import useMovieAPI from "@/hooks/useMovieAPI"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Filme() {
  const { id } = useParams()
  const [detalheFilme, setDetalheFilme] = useState<FilmeDetalhado | null>(null)
  const { getFilmeDetalhado } = useMovieAPI()

  useEffect(() => {
    getFilmeDetalhado(String(id)).then(setDetalheFilme)
  }, [])
  return (
    <Wrap>
      {
        detalheFilme && (
          <CardFilmeDetalhado filme={detalheFilme} />
        )
      }
      {
        detalheFilme?.atores && (
          <Elenco elenco={detalheFilme.atores} />
        )
      }

      <SugestoesFilmes idFilme={String(id)}/>
    </Wrap>
  )
}