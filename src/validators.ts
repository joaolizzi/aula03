import * as readline from "readline";

export function obrigatorio(valor: string, nomeCampo: string): string {
  const v = valor.trim();
  if (v.length === 0) {
    throw new Error(`Campo obrigatório: ${nomeCampo}`);
  }
  return v;
}

export function parseNumeroInteiro(valor: string, nomeCampo: string): number {
  const v = obrigatorio(valor, nomeCampo);
  const n = Number(v);

  if (!Number.isInteger(n)) {
    throw new Error(`${nomeCampo} deve ser um número inteiro. Você informou: ${valor}`);
  }

  return n;
}

export function entre(n: number, min: number, max: number, nomeCampo: string): number {
  if (n < min || n > max) {
    throw new Error(`${nomeCampo} deve estar entre ${min} e ${max}. Valor: ${n}`);
  }
  return n;
}


// ===== DEMO =====
async function main() {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const perguntar = (texto: string): Promise<string> =>
    new Promise((resolve) => rl.question(texto, (resposta) => resolve(resposta)));

  try {

    console.log("=== Demo: validators.ts ===");

    const nome = obrigatorio(await perguntar("Nome: "), "nome");

    const idadeStr = await perguntar("Idade (0-120): ");
    const idade = entre(parseNumeroInteiro(idadeStr, "idade"), 0, 120, "idade");

    console.log("Dados validados:");
    console.log({ nome, idade });

  } catch (err) {

    const msg = err instanceof Error ? err.message : String(err);
    console.log("Erro:", msg);

  } finally {

    rl.close();

  }
}

if (require.main === module) {
  main();
}