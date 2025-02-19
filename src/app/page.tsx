import Container from "@/components/template/Container";
import Flex from "@/components/template/Flex";
import Grid from "@/components/template/Grid";
import Wrap from "@/components/template/Wrap";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="w-96 bg-yellow-400">
      <p className="w-20 h-20 bg-red-200">p1</p>
      <p className="w-20 h-20 bg-green-200">p2</p>
      <p className="w-20 h-20 bg-red-200">p1</p>
      <p className="w-20 h-20 bg-green-200">p2</p>
      <p className="w-20 h-20 bg-red-200">p1</p>
      <p className="w-20 h-20 bg-green-200">p2</p>
      <p className="w-20 h-20 bg-red-200">p1</p>
      <p className="w-20 h-20 bg-green-200">p2</p>
    </Container>
  );
}
