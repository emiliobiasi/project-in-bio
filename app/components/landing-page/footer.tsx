import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-4 lg:p-6 mt-8 lg:mt-10 text-center">
      <hr className="my-6 lg:my-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />{" "}
      <p className="text-xs lg:text-sm mt-4">
        &copy; {new Date().getFullYear()} emiliobiasi. Todos os direitos
        reservados.
      </p>
      <div className="mt-2 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 text-sm">
        <Link href="/terms" className="hover:underline">
          Termos de Serviço
        </Link>
        <Link href="/privacy" className="hover:underline">
          Política de Privacidade
        </Link>
      </div>
    </footer>
  );
}
