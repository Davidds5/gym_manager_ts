
import type { MatriculaRepository } from "../repositories/matriculas-repository";


interface RealizarCheckInRequest {
    alunoId: number;
}

export class RealizarCheckInUseCase {
    constructor(private matriculasRepository: MatriculaRepository) { }

    async execute({ alunoId }: RealizarCheckInRequest) {
        const matricula = await this.matriculasRepository.buscaPorAlunoId(alunoId);
        if (!matricula) {
            throw new Error('Aluno nao possui matricula.');
        }

        if (matricula.status !== 'ATIVA') {

            throw new Error('Matricula nao esta ativada ');

        }
        return {
            autorizado: true,
        };
    }
}