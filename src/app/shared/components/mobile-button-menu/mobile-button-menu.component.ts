import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-mobile-button-menu',
    templateUrl: './mobile-button-menu.component.html',
    styleUrls: ['./mobile-button-menu.component.scss'],
})
export class MobileButtonMenuComponent {
    private toggleButton: any;
    sidebarVisible: boolean = false;

    constructor(private router: Router, private primengConfig: PrimeNGConfig) {}

    sidebarToggle(id: string) {
        console.log(id);
        if (id == 'buttonMenu') {
            if (this.sidebarVisible === false) {
                this.sidebarOpen();
            } else {
                this.sidebarClose();
            }
        } else {
            this.sidebarClose();
            this.router.navigate(['/', id]);
        }
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];

        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    }

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        if (this.toggleButton) {
            this.toggleButton.classList.remove('toggled');
        }
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }
}
