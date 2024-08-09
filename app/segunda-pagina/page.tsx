'use client'

import { useRDStation } from "@/components/rd-station/use-rd-station";
import Link from "next/link";

export default function PaginaVazia() {

  useRDStation();

    return (
      <div className="flex flex-col w-full bg-yellow-200 min-h-screen items-center gap-10">
        <h1 className="pt-10">Testando RD Station - Página vazia 1</h1>
        <Link href={"/"}>
          <button className="bg-red-400" >Voltar pra página principal</button>
        </Link>
      </div>
    );
  }
  