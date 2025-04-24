import React from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

export default function ExplicacoesSite() {
  return (
    <div className="min-h-screen bg-[url('/bg-math.jpg')] bg-cover bg-center text-white p-6">
      <header className="text-center py-12">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">Explicações de Matemática e Físico-Química</h1>
        <p className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto">
          Sou o João Martins, explicador com formação em Física Teórica e atualmente no mestrado em Matemática. Tenho vasta experiência em explicações e preparação intensiva para exames nacionais. O meu método é dinâmico, passo a passo, e sem espaço para o tédio — explicações feitas à tua medida, para garantires resultados.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-black/50 shadow-lg border border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-300">📚 O que ofereço</h2>
            <ul className="list-disc pl-5 space-y-2 text-base">
              <li>Explicações individuais personalizadas</li>
              <li>Preparação para exames nacionais e testes</li>
              <li>Apoio contínuo via email/WhatsApp</li>
              <li>Material de apoio incluído</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-black/50 shadow-lg border border-white/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-300">🎯 Áreas e Níveis</h2>
            <ul className="list-disc pl-5 space-y-2 text-base">
              <li>Matemática (3º ciclo, secundário, ensino superior)</li>
              <li>Físico-Química (3º ciclo e secundário)</li>
              <li>Matemática para universitários</li>
              <li>Local: Lisboa e arredores</li>
              <li>Horários flexíveis</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mt-10">
        <Card className="bg-black/50 shadow-lg border border-white/20 max-w-2xl mx-auto">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-emerald-300">📨 Contacta-me</h2>
            <form
              action="https://formspree.io/f/mjkwvyjq"
              method="POST"
              className="space-y-4"
            >
              <Input name="nome" placeholder="Teu nome" required className="bg-white text-black" />
              <Input name="email" placeholder="Teu email" type="email" required className="bg-white text-black" />
              <Textarea name="mensagem" placeholder="Escreve aqui a tua dúvida ou mensagem..." required className="bg-white text-black" />
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">Enviar mensagem</Button>
            </form>
            <div className="text-center mt-4">
              <a
                href="https://wa.me/351962995010?text=Ol%C3%A1%20Jo%C3%A3o%2C%20estou%20interessado%2Fa%20nas%20explica%C3%A7%C3%B5es.%20Gostava%20de%20saber%20mais%20sobre%20hor%C3%A1rios%20e%20disponibilidade.%20Obrigado!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full mt-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white">
                  Agendar explicação via WhatsApp
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center text-emerald-300">💬 O que dizem os alunos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Mariana F.", "Rui C.", "Beatriz M.", "Tiago S.", "Leonor A."].map((nome, idx) => (
            <Card key={idx} className="bg-black/50 shadow-lg border border-white/20">
              <CardContent className="p-4">
                <p className="text-yellow-400">⭐️⭐️⭐️⭐️⭐️</p>
                <p className="italic mt-2">
                  {
                    [
                      "Nunca tinha percebido Matemática assim antes! O João explica mesmo bem e com calma.",
                      "A preparação para o exame correu muito melhor com as explicações dele. Recomendo totalmente!",
                      "As aulas são mesmo dinâmicas. Finalmente comecei a gostar de Física!",
                      "Gostei muito do método passo a passo. O João não deixa ninguém ficar para trás.",
                      "Passei de negativa a 16 no exame! Muito obrigado, João!"
                    ][idx]
                  }
                </p>
                <p className="mt-4 font-semibold text-white">— {nome}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="text-center mt-12 text-gray-300">
        <p>&copy; 2025 Explicações por João Martins. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
