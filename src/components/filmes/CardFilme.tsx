import Flex from "../template/Flex"
import Titulo from "../template/Titulo"
import Wrap from "../template/Wrap"

interface CardFilmeProps {
  filme: Filme
  className?: string
}

export default function CardFilme({filme, className}: CardFilmeProps) {
  return (
    <Wrap className="
        rounded-2xl h-60 max-h-60 bg-black border border-white/[0.2]
        group-hover:boder-kino relative z-20
      "
    >
      <Flex col className="h-60 z-50 justify-between py-10 px-2">
        <Titulo texto={filme.titulo} pequeno alinhar="left"/>
      </Flex>
    </Wrap>
  )
}