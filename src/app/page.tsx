import Flex from "@/components/template/Flex";
import Image from "next/image";

export default function Home() {
  return (
    <Flex col>
      <p className="w-20 h-20 bg-red-200">p1</p>
      <p className="w-20 h-20 bg-green-200">p2</p>
    </Flex>
  );
}
