import { perguntar, fecharIO } from "./io";
import { obrigatorio, parseNumeroInteiro, entre } from "./validators";

type Turma = "1TADS" | "2TADS" | "3TADS";

interface Aluno {
  nome: string;
  idade: number;
  turma: Turma;
}

async function main() {
  console.log("=== Cadastro de Aluno (CLI) ===");

  try {
    const nome = obrigatorio(await perguntar("Nome: "), "nome");

    let idade = parseNumeroInteiro(await perguntar("Idade: "), "idade");
    idade = entre(idade, 0, 120, "idade");

    const turmaInput = obrigatorio(await perguntar("Turma (1TADS, 2TADS, 3TADS): "), "turma");

    if (turmaInput !== "1TADS" && turmaInput !== "2TADS" && turmaInput !== "3TADS") {
      throw new Error("Turma deve ser 1TADS, 2TADS ou 3TADS");
    }

    const aluno: Aluno = {
      nome,
      idade,
      turma: turmaInput as Turma
    };

    console.log("Aluno cadastrado com sucesso:");
    console.log(aluno);

  } catch (erro: any) {
    console.log("Erro:", erro.message);
  } finally {
    fecharIO();
  }
}

main();