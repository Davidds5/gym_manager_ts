import type { Matricula } from '@prisma/client';

export interface MatriculaRepository {
    buscaPorAlunoId(alunoId: number): Promise<Matricula | null>
}