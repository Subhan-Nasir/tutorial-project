import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title:string = "Tutorial Project";
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService:UiService, private router:Router){
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);

  }

  ngOnInit(): void {

  }

  toggleAddTask(){
    console.log("Add button toggled"); 
    this.uiService.toggleAddTask(); 
  }

  hasRoute(route: String) {
    return this.router.url === route;  
  }

}
