import { Component, OnInit, OnChanges, Input } from '@angular/core'

import { Coracao } from '../shared/coracao.model'

@Component({
	selector: 'app-tentativas',
	templateUrl: './tentativas.component.html',
	styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

	@Input() public tentativas: number

	public coracoes: Coracao[] = [
		new Coracao(), new Coracao(), new Coracao()
	]

	constructor() { }

	ngOnChanges() {
		if (this.tentativas !== this.coracoes.length && this.tentativas >= 0) {
			this.coracoes[this.tentativas].cheio = false
		}
	}

	ngOnInit() { }
}
