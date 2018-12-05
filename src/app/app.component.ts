import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
	form: FormGroup;

	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({
			username: [ '', [ Validators.required ] ],
			password: [ '', [ Validators.required ] ],
		});

		this.form.patchValue({
			username: 'Harvin',
			password: '123',
		});
	}

	onSubmit(event) {
		console.log(event);
	}
}
