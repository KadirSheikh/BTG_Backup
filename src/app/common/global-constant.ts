import { Injectable } from "@angular/core";

@Injectable()
export class GlobalConstants {
    public isLoggeddIn = false;
   public authToken =  localStorage.getItem('auth-token');
   public email =  localStorage.getItem('email');
   public mobile =  localStorage.getItem('mobile');
   public name =  localStorage.getItem('name');
   public id =  localStorage.getItem('id');
   public isLoggedIn =  localStorage.getItem('isLoggedIn');
} 