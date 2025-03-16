import { manageAuth } from "@/app/actions/manage-auth";
import { auth } from "@/app/lib/auth";
import { TrendingUp } from "lucide-react";
import PortalButton from "./portal-button";

export default async function TotalVisits({
  totalVisits = 0,
  showBar = false,
}: {
  totalVisits?: number;
  showBar?: boolean;
}) {
  const session = await auth();

  return (
    <div className="w-full lg:w-min whitespace-nowrap flex items-center justify-between lg:justify-start gap-3 lg:gap-5 bg-background-secondary border border-border-primary px-4 lg:px-8 py-2 lg:py-3 rounded-xl shadow-lg">
      <span className="font-bold text-white text-sm lg:text-base">
        Total de visitas
      </span>
      <div className="flex items-center gap-2 text-accent-green">
        <span className="text-xl lg:text-3xl font-bold">{totalVisits}</span>
        <TrendingUp className="size-4 lg:size-6" />
      </div>
      {showBar && (
        <div className="flex items-center gap-2">
          {session?.user.isSubscribed && <PortalButton />}
          <form action={manageAuth}>
            <button>Sair</button>
          </form>
        </div>
      )}
    </div>
  );
}
