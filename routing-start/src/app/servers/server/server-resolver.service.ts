import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {ServersService} from "../servers.service";

@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<Server> {
  constructor(private serversService: ServersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return this.serversService.getServer(+route.params['id']);
  }
}

interface Server {
  id: number,
  name: string,
  status: string
}
