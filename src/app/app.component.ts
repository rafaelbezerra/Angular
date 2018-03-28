import { Component } from '@angular/core'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	public jogoEmAndamento: boolean = true
	public tipo: string

	encerrarJogo(tipo: string): void {
		this.jogoEmAndamento = false

		this.tipo = tipo
	}

	reiniciarJogo(): void {
		this.jogoEmAndamento = true
		this.tipo = undefined
	}

}
