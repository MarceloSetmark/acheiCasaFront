"use client";
import Step1 from './(steps)/Step1'
import Loading from '@/app/(components)/Loader/loader'
import { useEffect, useState } from "react";

export default function AddPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loading />
  return (
    <section className="mx-auto px-4 py-8 mt-[98px] relative ">
      <div>
          <Step1 />
      </div>
      <div className="absolute left-0 right-0 px-10 py-4">
      {/* Barra de progresso */}
      <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-500 transition-all duration-300"
          style={{ width: `${(3 / 15) * 100}%` }} // exemplo: etapa 3 de 14
        ></div>
      </div>

     
      <div className="flex items-center justify-between mt-6">
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition cursor-pointer"
        >
          Voltar
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
        >
          Próximo
        </button>
      </div>
    </div>

    </section>
  );
}
