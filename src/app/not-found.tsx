"use client"
import Descricao from "@/components/template/Descricao";
import Flex from "@/components/template/Flex";
import Titulo from "@/components/template/Titulo";
import { FilmSlate } from "@phosphor-icons/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Flex col className="mt-32 w-full">
      <FilmSlate size={100} className="text-zinc-400"/>
      <Titulo texto="Opss..." alinhar="center" className="mb-0 text-6xl" />
      <Descricao texto="Página não encontrada" className="text-xl font-semibold" />
      <Link href="/filmes" className="bg-red-kino font-bold px-4 py-2 rounded-lg hover:brightness-75">Voltar para a página inicial</Link>
    </Flex>
  )
}