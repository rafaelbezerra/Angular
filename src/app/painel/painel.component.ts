import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core'

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases.mock'

@Component({
	selector: 'app-painel',
	templateUrl: './painel.component.html',
	styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

	public frases: Frase[] = FRASES
	public instrucao: string = 'Traduza a frase'
	public resposta: string

	public rodada: number = 0
	public rodadaFrase: Frase

	public progresso: number = 0

	public tentativas: number = 3

	@Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

	constructor() {
		this.atualizaRodada()
	}

	ngOnInit() { }

	ngOnDestroy() { }

	public atualizaRodada(): void {
		// atualiza frase
		this.rodadaFrase = this.frases[this.rodada]

		// limpa o campo resposta
		this.resposta = ''
	}

	public verificarResposta(): void {

		if (this.rodadaFrase.frasePtBr.toLocaleUpperCase() === this.resposta.toLocaleUpperCase().trim()) {
			// trocar pergunta rodada
			this.rodada++

			// progresso
			this.progresso += 100 / this.frases.length

			if (this.rodada === this.frases.length) {
				this.encerrarJogo.emit('vitoria')
			} else {
				// atualiza o objeto rodadaFrase
				this.atualizaRodada()
			}
		} else {
			this.tentativas--

			if (this.tentativas === -1) {
				this.encerrarJogo.emit('derrota')
			}
		}
	}

}
