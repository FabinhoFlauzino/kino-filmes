"use client"

import { FilmSlate } from "@phosphor-icons/react"
import ImagemComFallback from "../template/ImagemComFallback"
import Wrap from "../template/Wrap"

interface PosterFilmeProps {
  url: string
  titulo: string
}

export default function PosterFilme({ url, titulo }: PosterFilmeProps) {
  return (
    <Wrap className="h-72 w-48 md:h-96 md:w-80 lg:h-[700px] lg:min-w-[500px] relative overflow-hidden rounded-lg m-auto">
      <ImagemComFallback url={url} imgAlt={`Poster do filme ${titulo}`}>
        <FilmSlate className="w-1/2 h-2/3 text-slate-800" />
      </ImagemComFallback>
    </Wrap>
  )
}