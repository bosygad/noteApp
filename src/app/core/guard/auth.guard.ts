import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
const _router =Inject(Router)
const auth = inject(AuthService)
if(auth.user.getValue() != null){
  return true;
}
else{
  _router.navigate(['login'])
  return false;
}

};
