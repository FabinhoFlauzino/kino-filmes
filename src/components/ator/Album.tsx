import { useEffect, useState } from "react"
import Titulo from "../template/Titulo"
import Wrap from "../template/Wrap"
import useMovieAPI from "@/hooks/useMovieAPI"
import Carrossel from "../template/Carrossel"
import Image from "next/image"
import Flex from "../template/Flex"
import Container from "../template/Container"

interface AlbumProps {
  idAtor: string
}

export default function Album({ idAtor }: AlbumProps) {
  const [imagens, setImagens] = useState<string[][]>([])
  const { getImagemAtor } = useMovieAPI()

  useEffect(() => {
    getImagemAtor(idAtor).then((imagens) => {
      const imagensPorSlides = 3
      let imagensRestantes = imagens
      const resultado = []

      while (imagensRestantes.length >= imagensPorSlides) {
        resultado.push(imagensRestantes.splice(0, imagensPorSlides))
      }
      setImagens(resultado)
    })
  }, [])

  if (imagens.length <= 0) return

  return (
    <Wrap>
      <Titulo pequeno texto="Fotos do(a) artista" className="w-full" alinhar="center" />

      <Carrossel>
        {imagens.map((grupo: string[], index) => {
          return (
            <Container key={index}>
              <Flex className="justify-between w-full">
                {grupo.map((linkImagem) => (
                  <Wrap key={linkImagem} className="h-52 md:h-96 lg:min-h-[600px] relative overflow-hidden rounded-lg">
                    <Image src={linkImagem} alt="Imagem do Ator" className="object-contain" sizes="40vw" fill />
                  </Wrap>
                ))}
              </Flex>
            </Container>
          )
        })}
      </Carrossel>
    </Wrap>
  )
}