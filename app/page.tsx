import { useRDStation } from "@/components/rd-station/use-rd-station";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  useRDStation();

  return (
    <div className="flex flex-col w-full bg-yellow-200 min-h-screen items-center gap-10">
      <h1 className="pt-10">Testando RD Station - Página principal</h1>
      <Link href={"/formulario"}>
        <button className="bg-red-400" >Ir para página do formulário</button>
      </Link>
    </div>
  );
}
