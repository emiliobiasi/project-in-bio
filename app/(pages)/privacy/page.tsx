export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6 text-gray-800">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center">
          Política de Privacidade
        </h1>
        <p className="text-center text-sm text-gray-500 mt-2">
          Última atualização: 15/03/2025
        </p>

        <hr className="my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

        <section className="mt-4">
          <h2 className="text-xl font-bold">1. Introdução</h2>
          <p className="mt-2 text-gray-600">
            A sua privacidade é importante para nós. Esta Política de
            Privacidade descreve como coletamos, usamos, armazenamos e
            protegemos suas informações pessoais quando você utiliza nossa
            plataforma <strong>Project in Bio - emiliobiasi</strong>.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">2. Informações que Coletamos</h2>
          <p className="mt-2 text-gray-600">
            Coletamos as seguintes informações ao utilizar nossa plataforma:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>
              <strong>Login via Google:</strong> Nome, endereço de e-mail e foto
              de perfil vinculados à sua conta Google.
            </li>
            <li>
              <strong>Informações Opcionais:</strong> Foto de perfil
              personalizada, nome, links de redes sociais e projetos.
            </li>
            <li>
              <strong>Informações de Pagamento:</strong> Apenas o e-mail
              cadastrado no Stripe para associar sua conta ao pagamento.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">3. Como Usamos Suas Informações</h2>
          <p className="mt-2 text-gray-600">
            Utilizamos suas informações para:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Autenticação e acesso à plataforma via Google Login.</li>
            <li>
              Gerenciar sua conta e exibir as informações que você optar por
              compartilhar.
            </li>
            <li>
              Processar pagamentos e fornecer acesso ao plano escolhido via
              Stripe.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">
            4. Compartilhamento de Informações
          </h2>
          <p className="mt-2 text-gray-600">
            Não vendemos, alugamos ou compartilhamos suas informações pessoais,
            exceto:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Com o Stripe, para processamento seguro de pagamentos.</li>
            <li>Quando exigido por lei.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">5. Segurança</h2>
          <p className="mt-2 text-gray-600">
            Implementamos medidas de segurança para proteger suas informações.
            No entanto, nenhuma transmissão de dados pela internet é 100%
            segura.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">6. Retenção de Dados</h2>
          <p className="mt-2 text-gray-600">
            Mantemos seus dados pelo tempo necessário para cumprir as
            finalidades mencionadas nesta Política.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">7. Seus Direitos</h2>
          <p className="mt-2 text-gray-600">
            Você pode acessar, corrigir ou excluir seus dados entrando em
            contato pelo e-mail: <strong>ejbiasi@gmail.com</strong>.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">8. Alterações nesta Política</h2>
          <p className="mt-2 text-gray-600">
            Podemos atualizar esta política periodicamente. Recomendamos que
            você a revise regularmente.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold">9. Contato</h2>
          <p className="mt-2 text-gray-600">
            Se tiver dúvidas, entre em contato pelo e-mail:{" "}
            <strong>ejbiasi@gmail.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
