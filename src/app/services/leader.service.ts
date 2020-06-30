import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADER } from '../shared/leaders';
import { Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getleader(): Observable<Leader[]> {
    return of(LEADER);
  }
  getFeaturedLeader(): Observable<Leader> {
    return of(LEADER.filter((leader) => leader.featured)[0]);
  }
}
