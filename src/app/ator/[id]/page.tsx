"use client"

import Album from "@/components/ator/Album"
import DetalhesAtor from "@/components/ator/DetalhesAtor"
import ImagemPerfil from "@/components/ator/ImagemPerfil"
import Container from "@/components/template/Container"
import Wrap from "@/components/template/Wrap"
import useMovieAPI from "@/hooks/useMovieAPI"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Ator() {
  const [ator, setAtor] = useState<AtorDetalhado | null>(null)
  const { id } = useParams()
  const { getAtorDetalhado } = useMovieAPI()

  useEffect(() => {
    getAtorDetalhado(String(id)).then(setAtor)
  }, [])

  return (
    <Wrap>
      {ator && (
        <Container className="mt-32 md:mt-44 min-h-96 w-full" bigPadding>
          <ImagemPerfil url={ator?.imagemPerfil} imgAlt={`Imagem de ${ator?.nome}`} />
          <DetalhesAtor ator={ator} />
        </Container>
      )}

      {ator && (<Album idAtor={String(id)} />)}
    </Wrap>
  )
}