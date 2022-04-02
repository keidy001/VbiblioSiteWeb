import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivreServiceService {

  url='http://localhost:8080/api';
  img='http://localhost:8080/api/livre/photo/';
  library='http://localhost:8080/api/librairy/images/';
  audiofile='http://localhost:8080/api/livre/audio';
  livrefile='http://localhost:8080/api/livre/livre';


  constructor(private http: HttpClient) { }

  
//Methode for add user
add(data: any){
  return this.http.post(this.url+'/utilisateur/ajouter' ,data, {responseType:'text'});
}

//Methode for user authentification

login(login: string, password: string){
  return this.http.get(this.url+'/utilisateur/login?login='+login+'&password='+password);
}

//  Methode for get book by format

livreByFormat(format: string){
  return this.http.get(this.url+'/livre/livrebyformat/'+format);
}
livreByFormatNotDeleted(format: string, state: boolean){
  return this.http.get(this.url+'/livre/formatNotDeleleted/'+format+'/'+state);
}

// Methode for get all books

listLivre(){
  return this.http.get(this.url+'/livre/lister/');
}

// Methode for get book by id

livreById(id: number){
return this.http.get(this.url+'/livre/afficher/'+id);
}

//Methode for update user information

updateUser(id: any, data: any){
this.http.put(this.url+'/utilisateur/modifier'+id, data, {responseType:'text'});
}

// Methode for get User by his id
getUser(id:any){
this.http.get(this.url+'/utilisateur/afficher'+id);
}

//Methode for get all Articles and Memory
getDocument(){
this.http.get(this.url+'/documents/lister');
}

getAllLibrairy(){
return this.http.get(this.url+'/librairy/lister');
}

getLivreByLibrairy(id: any){
return this.http.get(this.url+'/livre/livreByLibrairy/'+id);
}


// Get All Category not delleted
getAllcategory(state: boolean){
return this.http.get(this.url+'/category/byStatus/'+state);
}
// Get  Category not delleted by id
getCategoryById(id: number){
return this.http.get(this.url+'/category/afficher/'+id);
}

//Get all livre of and Category

getLivreByCat(format: any, category: any, state: boolean){
return this.http.get(this.url+'/livre/bycat/'+format+'/'+category+'/'+state);
}
getLivreById(id:number){
  return this.http.get(this.url +"/livre/afficher/"+id);
 }
}
