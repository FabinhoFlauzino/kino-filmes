import Link from "next/link";
import Container from "../template/Container";
import Descricao from "../template/Descricao";
import Flex from "../template/Flex";
import Titulo from "../template/Titulo";
import PosterFilme from "./PosterFilme";

interface CardFilmeEmDestqueProps {
  filme: Filme
  className?: string
}

export default function CardFilmeEmDestque({ filme, className }: CardFilmeEmDestqueProps) {

  return (
    <Container className={className}>
      <Flex className="gap-8 flex-col-reverse lg:flex-row">
        <Flex col className="flex-1 items-start px-4">
          <Titulo alinhar="left" texto={filme.titulo} />
          <Descricao texto={filme.descricao} className="text-xl text-justify" />
          <Link href={`/filmes/${filme.id}`} className="px-3 py-3 bg-red-kino font-semibold rounded-lg hover:brightness-75">Mais Detalhes</Link>
        </Flex>
        <PosterFilme
          url={filme.linkImagemPoster}
          titulo={filme.titulo}
        />
      </Flex>
    </Container>
  );
}