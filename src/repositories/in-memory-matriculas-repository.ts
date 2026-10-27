import type { Matricula } from '@prisma/client'
import type { MatriculaRepository } from './matriculas-repository'


export class InMemoryMatriculasRepository implements MatriculaRepository {
    public itens: Matricula[] = [];

    async buscaPorAlunoId(alunoId: number): Promise<Matricula | null> {
        const matricula = this.itens.find((item) => item.alunoId === alunoId);


        if (!matricula) {
            return null;
        }

        return matricula;
    }
}