import { component$, useSignal, $ } from "@builder.io/qwik";
import { DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { Button } from "~/components/button";
import { IconLeftArrow } from "~/components/icons/left-arrow";
import { BasicInformationStep } from "./_components/basic-information-step";
import { LocationStep } from "./_components/location-step";

type Step = {
  id: number;
  title: string;
};

export default component$(() => {
  const navigate = useNavigate();

  const steps: Step[] = [
    { id: 1, title: "Informasi Dasar" },
    { id: 2, title: "Lokasi" },
    { id: 3, title: "Peringkat" },
    { id: 4, title: "Fakultas & Biaya" },
  ];

  const currentStep = useSignal<number>(1);

  const goToStep = $((stepId: number) => {
    currentStep.value = stepId;
  });

  const isStepCompleted = (stepId: number) => stepId < currentStep.value;

  return (
    <div class="my-8">
      <Button
        title="Kembali"
        icon={<IconLeftArrow />}
        iconAlign="left"
        onClick$={() => navigate("/")}
      />
      <div class="flex flex-col items-center">
        <h1 class="text-3xl font-bold text-prim-300">Kontribusi</h1>
        <div class="mt-6 flex w-full flex-col items-center">
          {/* Step Indicator */}
          <div class="flex w-3/4 justify-center">
            {steps.map((step, index) => (
              <div key={step.id} class="flex items-center justify-center">
                <div class="flex h-24 w-28 flex-col items-center text-center">
                  <div
                    class={`
              flex h-10 w-10
              items-center justify-center rounded-full border-2 text-sm font-medium 
              ${isStepCompleted(step.id) ? "border-green-500 bg-green-500 text-white" : step.id === currentStep.value ? "border-blue-500 bg-blue-500 text-white" : "border-gray-200 bg-gray-200 text-gray-500"}
            `}
                  >
                    {isStepCompleted(step.id) ? "✓" : step.id}
                  </div>
                  <p>{step.title}</p>
                </div>
                {/* Line */}
                {index !== steps.length - 1 && (
                  <div
                    class={`h-[2px] w-10 ${isStepCompleted(step.id) ? "bg-prim-300" : "bg-gray-400"}`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div class="mt-6 w-full">
            {currentStep.value === 1 && <BasicInformationStep />}
            {currentStep.value === 2 && <LocationStep />}
          </div>

          {/* Navigation Buttons */}
          <div class="mt-4 flex w-full max-w-3xl justify-between">
            <button
              class="rounded-lg bg-blue-500 px-4 py-2 text-white disabled:bg-gray-300 disabled:text-slate-500"
              onClick$={() => goToStep(currentStep.value - 1)}
              disabled={currentStep.value === 1}
            >
              Sebelumnya
            </button>

            <button
              class="rounded-lg bg-blue-500 px-4 py-2 text-white disabled:bg-gray-300 disabled:text-slate-500"
              onClick$={() => goToStep(currentStep.value + 1)}
              disabled={currentStep.value === steps.length}
            >
              Berikutnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Contributes - Kampusku",
  meta: [
    {
      name: "description",
      content:
        "Kampusku merupakan platform untuk berbagi & mencari tahu informasi kampus di Indonesia.",
    },
  ],
};
