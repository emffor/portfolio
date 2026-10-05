import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
      <p className="font-mono text-sm font-medium text-accent">404 · Página não encontrada · Page not found</p>
      <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Este endereço não está no portfólio.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
        O link pode ter mudado ou não existir. Você pode explorar os projetos selecionados ou voltar à página inicial.
      </p>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted" lang="en">
        This address is not in the portfolio. The link may have changed or never existed — explore the selected projects or go back home.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/#projetos">Ver projetos · View projects</Button>
        <Button href="/" variant="outline">Voltar ao início · Back home</Button>
      </div>
    </section>
  );
}
