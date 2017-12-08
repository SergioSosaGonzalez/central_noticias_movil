import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryServiceProvider {

  urlCategory='http://amgp.org/api/v1//news/$2y$08$WklRRThLQndRK2gyWmtrVu.ZFy7upIuCUIOFUmF8i1AMAx0oglTEm/?limit=12&order=desc';
  constructor(public http: HttpClient) {
    console.log('Hello CategoryServiceProvider Provider');
  }

  getCategory(){
	return new Promise(resolve=>{
		this.http.get(this.urlCategory).subscribe(data => {
			resolve(data);
		}, err =>{
			console.log(err);
		});
	});
}
}
