"use client"
import Link from "next/link";
import Flex from "./Flex";
import Wrap from "./Wrap";
import { Popcorn } from "@phosphor-icons/react";

export default function Cabecalho() {
  return (
    <Wrap className="bg-zinc-900">
      <header className="p-4 px-32">
        <Flex className="justify-between">
          <Link href="/" className="font-bold px-4 py-2 bg-red-kino flex gap-1 items-center justify-center rounded-lg">
            <Popcorn size={20} />
            Kino
          </Link>
          <Link target="_blank" href="https://www.themoviedb.org/" className="font-bold px-4 hover:brightness-75">
            The Movie DB
          </Link>
        </Flex>
      </header>
    </Wrap>
  )
}