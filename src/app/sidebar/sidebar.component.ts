import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  onClick(){
     let menu = document.getElementById('menu');
     menu.classList.toggle('show')
  }

  ngOnInit() {
  }

}
