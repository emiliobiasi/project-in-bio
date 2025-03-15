import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-6 mt-10 text-center">
      <hr className="my-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />{" "}
      <p className="text-sm mt-4">
        &copy; {new Date().getFullYear()} emiliobiasi. Todos os direitos
        reservados.
      </p>
      <div className="mt-2 flex justify-center gap-4">
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
