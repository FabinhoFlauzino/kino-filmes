import Flex from "@/components/template/Flex";
import Grid from "@/components/template/Grid";
import Image from "next/image";

export default function Home() {
  return (
    <Grid numCols={2} column numRows={3}>
      <p className="w-20 h-20 bg-red-200">p1</p>
      <p className="w-20 h-20 bg-green-200">p2</p>
      <p className="w-20 h-20 bg-red-200">p1</p>
      <p className="w-20 h-20 bg-green-200">p2</p>
      <p className="w-20 h-20 bg-red-200">p1</p>
      <p className="w-20 h-20 bg-green-200">p2</p>
      <p className="w-20 h-20 bg-red-200">p1</p>
      <p className="w-20 h-20 bg-green-200">p2</p>
    </Grid>
  );
}
