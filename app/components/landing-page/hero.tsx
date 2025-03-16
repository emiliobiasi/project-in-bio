import ProjectCard from "../commons/project-card";
import TotalVisits from "../commons/total-visits";
import UserCard from "../commons/user-card/user-card";
import CreateNow from "../ui/create-now";

export default function Hero({
  texts,
}: {
  texts?: {
    title: string;
    description: string;
  };
}) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row pt-24 lg:pt-0">
      <div className="w-full px-4 lg:px-8 flex flex-col gap-2 mt-8 lg:mt-[35vh]">
        <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight lg:leading-[64px]">
          {texts?.title || "Seus projetos e redes sociais em um único link"}
        </h1>
        <h2 className="text-lg lg:text-xl leading-6">
          {texts?.description ||
            "Crie sua própria página de projetos e compartilhe eles com mundo."}
          <br className="hidden lg:block" />
          Acompanhe o engajamento com Analytics de cliques
        </h2>
        <CreateNow />
      </div>

      <div className="w-full mt-8 lg:mt-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
        <div className="relative scale-75 lg:scale-100">
          <UserCard isLandingPage={true} />
          <div className="absolute -bottom-[7%] -right-[45%] hidden lg:block">
            <TotalVisits totalVisits={1342} />
          </div>
          <div className="absolute top-[20%] -left-[45%] -z-10 hidden lg:block">
            <ProjectCard
              name="Projeto 1"
              description="Descrição do projeto 1"
              img="/project1.jpg"
            />
          </div>
          <div className="absolute -top-[5%] -left-[55%] -z-10 hidden lg:block">
            <ProjectCard
              name="Projeto 2"
              description="Descrição do projeto 2"
              img="/project2.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
