import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterClientModel } from '../../shared/models/register-client.model';

@Component({
    selector: 'app-register-client',
    templateUrl: './register-client.component.html',
    styleUrls: ['./register-client.component.scss'],
})
export class RegisterClientComponent {
    registerClientForm: FormGroup;
    newClient: RegisterClientModel = new RegisterClientModel();
    submitted = false;

    constructor(private formBuilder: FormBuilder, private router: Router) {}
    ngOnInit(): void {
        this.registerClientForm = this.initRegisterClientForm(this.newClient);
    }

    initRegisterClientForm(newClient: RegisterClientModel) {
        return this.formBuilder.group({
            email: [newClient.email, [Validators.email, Validators.required]],
            name: [newClient.name, [Validators.required]],
            password: [newClient.password, [Validators.required]],
            verificationPassword: [
                newClient.verificationPassword,
                [Validators.required],
            ],
            isJuridical: [newClient.isJuridical, [Validators.required]],
        });
    }
    get formControl() {
        return this.registerClientForm.controls;
    }
    onSubmitRegisterClient(): void {
        this.submitted = true;
        console.log(this.formControl);
        if (this.registerClientForm.valid) {
            console.log(this.formControl);
            console.log('-->', this.newClient);
        }
    }
}
