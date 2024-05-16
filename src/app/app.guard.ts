import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return
    }

    checkLogin(url: string): true | UrlTree | Observable<boolean | UrlTree> {
        return
    }

}