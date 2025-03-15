export default function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6 text-gray-800">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center">Termos de Uso</h1>
        <p className="text-center text-sm text-gray-500 mt-2">
          Última atualização: 15/03/2025
        </p>

        <hr className="my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

        <section className="mt-4">
          <h2 className="text-xl font-bold">1. Aceitação dos Termos</h2>
          <p className="mt-2 text-gray-600">
            Ao acessar e utilizar a plataforma{" "}
            <strong>Project in Bio - emiliobiasi</strong>, você concorda em
            cumprir e ficar vinculado aos seguintes Termos de Uso. Caso não
            concorde com qualquer parte destes termos, não utilize a plataforma.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">2. Descrição do Serviço</h2>
          <p className="mt-2 text-gray-600">
            A plataforma permite que usuários criem e compartilhem um portfólio
            online, incluindo links de projetos, redes sociais e informações
            pessoais. Além disso, assinantes podem acompanhar o número de
            acessos aos seus links de projetos, perfis e redes sociais.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">3. Cadastro e Segurança</h2>
          <p className="mt-2 text-gray-600">
            Para utilizar o serviço, você deve se autenticar via Google. Seu
            endereço de e-mail será armazenado para fins de acesso e gestão da
            conta.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">4. Privacidade</h2>
          <p className="mt-2 text-gray-600">
            Respeitamos a sua privacidade. Não compartilhamos seus dados com
            terceiros, exceto quando necessário para processar pagamentos via
            Stripe. Consulte nossa{" "}
            <a href="/privacy" className="text-blue-500 hover:underline">
              Política de Privacidade
            </a>{" "}
            para mais detalhes.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">5. Conteúdo do Usuário</h2>
          <p className="mt-2 text-gray-600">
            O usuário é responsável pelo conteúdo inserido na plataforma,
            incluindo fotos, links e descrições. Não nos responsabilizamos por
            qualquer conteúdo impróprio ou ilegal carregado pelos usuários.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">6. Pagamentos e Reembolsos</h2>
          <p className="mt-2 text-gray-600">
            Todos os pagamentos são processados através do Stripe. Após a
            conclusão do pagamento, o usuário terá acesso às funcionalidades
            premium da plataforma. Não oferecemos reembolsos, exceto em casos
            excepcionais a nosso exclusivo critério.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">7. Modificações no Serviço</h2>
          <p className="mt-2 text-gray-600">
            Reservamo-nos o direito de modificar ou descontinuar qualquer
            funcionalidade da plataforma, notificando os usuários com
            antecedência sempre que possível.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">
            8. Limitação de Responsabilidade
          </h2>
          <p className="mt-2 text-gray-600">
            Em nenhuma circunstância seremos responsáveis por qualquer dano
            indireto, incidental, especial ou consequente decorrente do uso da
            plataforma.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">9. Alterações nos Termos</h2>
          <p className="mt-2 text-gray-600">
            Podemos atualizar estes Termos de Uso periodicamente. A data da
            última atualização será revisada no topo desta página. É sua
            responsabilidade revisar estes Termos regularmente.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">10. Contato</h2>
          <p className="mt-2 text-gray-600">
            Se tiver dúvidas sobre estes Termos de Uso, entre em contato pelo
            e-mail: <strong>ejbiasi@gmail.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
