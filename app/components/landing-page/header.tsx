import { auth } from "@/app/lib/auth";
import Button from "../ui/button";
import { manageAuth } from "@/app/actions/manage-auth";
import Link from "next/link";
import { getProfileId } from "@/app/server/get-profile-data";

export default async function Header() {
  const session = await auth();

  const profileId = await getProfileId(session?.user?.id as string);

  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-4 lg:py-10 px-4 lg:px-0">
      <div className="flex items-center gap-2 lg:gap-4">
        <img
          src="/logo.svg"
          alt="ProjectInBio Logo"
          className="w-8 lg:w-auto"
        />
        <h3 className="text-white text-lg lg:text-2xl font-bold">
          ProjectInBio
        </h3>
      </div>
      <div className="flex items-center gap-2 lg:gap-4">
        {session && (
          <Link href={`/${profileId}`}>
            <Button className="text-sm lg:text-base px-3 lg:px-4 py-2">
              Minha Página
            </Button>
          </Link>
        )}
        <form action={manageAuth}>
          <Button className="text-sm lg:text-base px-3 lg:px-4 py-2">
            {session ? "Sair" : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}
