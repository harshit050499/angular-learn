import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADER } from '../shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getleader(): Promise<Leader[]> {
    return Promise.resolve(LEADER);
  }
  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADER.filter((leader) => leader.featured)[0]);
  }
}
