import { component$, $ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { Button } from "~/components/button";
import { IconNational } from "~/components/icons/national";
import { Iconinternational } from "~/components/icons/international";
import { TRankType } from "..";

export const RankTypeTab = component$(({ type }: { type: TRankType }) => {
  const navigate = useNavigate();

  const handleChangeRankType = $((type: string) => {
    navigate(`/rank?type=${type}`);
  });

  return (
    <div class="flex space-x-4 rounded-md bg-prim-300 p-1">
      <Button
        title="Nasional"
        class={`px-2 py-1 ${type === "national" ? "bg-white text-prim-300" : "hover:bg-white hover:text-prim-300"}`}
        icon={
          <IconNational
            className={`${type === "national" ? "text-prim-300" : "text-white group-hover:text-prim-300"}`}
          />
        }
        iconAlign="right"
        onClick$={() => handleChangeRankType("national")}
      />
      <Button
        title="Internasional"
        class={`px-2 py-1 ${type === "international" ? "bg-white text-prim-300" : "hover:bg-white hover:text-prim-300"}`}
        icon={
          <Iconinternational
            className={`${type === "international" ? "text-prim-300" : "text-white group-hover:text-prim-300"}`}
          />
        }
        iconAlign="right"
        onClick$={() => handleChangeRankType("international")}
      />
    </div>
  );
});
