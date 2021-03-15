import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { environment } from 'environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
user:any;
  constructor(private http: HttpClient, private tokenService: TokenService,private userService:UserService) { }
  
  authenticate(user: any):any {
       
       return this.http.post(environment.api_url + '/api/Account/Login',user);
       
  }

  logout() {
    this.tokenService.clear();
    
  }
  changePassword(params : any) {
    return this.http.post(environment.api_url + '/api/Account/ChangePassword', params );
  }

  forgotPassword(usernameOrMail : string)
  {
    const params = new URLSearchParams();
    params.set('userName', usernameOrMail)
    return this.http.post(environment.api_url +'/api/Account/RecoverPassword?'+params.toString(),null);
  }

  getUserInfos() {
   return this.http.get(environment.api_url + '/api/Account/Profile'  );
  } 
}
