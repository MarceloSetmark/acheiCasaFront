"use client";
import Step1 from './(steps)/Step1'
import Step2 from './(steps)/Step2'
import Step3 from './(steps)/Step3'
import Loading from '@/app/(components)/Loader/loader'
import { useEffect, useState } from "react";

export default function AddPage() {
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  const totalSteps = 15;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loading />

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <section className="mx-auto px-4 py-8 mt-[98px]">
      <div>{renderStep()}</div>
{/*       <div>
          <Step2 />
      </div> */}
      <div className="absolute left-60 right-0 bottom-4 px-10 py-4">
      <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-500 transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
     
        <div className="flex items-center justify-between mt-6">
          <button
            type="button"
            onClick={() => setCurrentStep(prev => Math.max(prev - 1, 1))}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition cursor-pointer"
            disabled={currentStep === 1}
          >
            Voltar
          </button>

          <button
            type="button"
            onClick={() => setCurrentStep(prev => prev + 1)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
          >
            Próximo
          </button>
        </div>
    </div>

    </section>
  );
}
