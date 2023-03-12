import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(private router: Router) {
  
  }

  sidebarToggle(id:string) {        
    console.log(id)
    if (id == 'buttonMenu'){
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }else{
      this.sidebarClose(); 
      this.router.navigate(['/',  id]);
    }
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];

    setTimeout(function(){
        toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  };


  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    if(this.toggleButton){
        this.toggleButton.classList.remove('toggled');
    }
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  };
}
