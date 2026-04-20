interface Aluno {
    id: number;
    nome: string;
    email?: string;
    ativo: boolean;
}

type Turma = "1TADS" | "2TADS" | "3TADS";

function matricular(aluno: Aluno, turma: Turma) {
    console.log(`${aluno.nome} matriculado na turma ${turma}`);
}
