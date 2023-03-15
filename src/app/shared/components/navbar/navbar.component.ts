import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    private toggleButton: any;
    sidebarVisible: boolean = false;
    showMobileButton: boolean = false;

    constructor(private router: Router) {}

    ngOnInit() {
        this.verifyScreenSize();
    }

    verifyScreenSize() {
        if (window.innerWidth < 768) {
            this.showMobileButton = true;
        } else {
            this.showMobileButton = false;
        }
    }
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.verifyScreenSize();
    }

    navigate(id: string) {
        this.router.navigate(['/', id]);
    }

    // sidebarToggle(id: string) {
    //     console.log(id);
    //     if (id == 'buttonMenu') {
    //         if (this.sidebarVisible === false) {
    //             this.sidebarOpen();
    //         } else {
    //             this.sidebarClose();
    //         }
    //     } else {
    //         this.sidebarClose();
    //         this.router.navigate(['/', id]);
    //     }
    // }
    //
    // sidebarOpen() {
    //     const toggleButton = this.toggleButton;
    //     const html = document.getElementsByTagName('html')[0];
    //
    //     setTimeout(function () {
    //         toggleButton.classList.add('toggled');
    //     }, 500);
    //     html.classList.add('nav-open');
    //
    //     this.sidebarVisible = true;
    // }
    //
    // sidebarClose() {
    //     const html = document.getElementsByTagName('html')[0];
    //     if (this.toggleButton) {
    //         this.toggleButton.classList.remove('toggled');
    //     }
    //     this.sidebarVisible = false;
    //     html.classList.remove('nav-open');
    // }
}
