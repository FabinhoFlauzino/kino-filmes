"use client"

import Container from "@/components/template/Container"
import Wrap from "@/components/template/Wrap"
import useMovieAPI from "@/hooks/useMovieAPI"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Ator() {
  const [ator, setAtor] = useState<AtorDetalhado | null>(null)
  const { id } = useParams()
  const {getAtorDetalhado} = useMovieAPI()

  useEffect(() => {
    getAtorDetalhado(String(id)).then(setAtor)
  }, [])

  return (
    <Wrap>
      <Container className="mt-32 md:mt-44 min-h-96 w-full">
        <div>
          {JSON.stringify(ator)}
        </div>
      </Container>
    </Wrap>
  )
}