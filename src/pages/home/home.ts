import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { CategoryServiceProvider } from '../../providers/category-service/category-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
users:any;
category:any;
  constructor(public navCtrl: NavController, public restProvider: RestProvider,public categoryProvider:CategoryServiceProvider) {
    this.getUsers();
    this.getCategory();
  }
  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  getCategory(){
    this.categoryProvider.getCategory().then(data=>{
       this.category=data;
       console.log(this.category);
    });
  }
}
