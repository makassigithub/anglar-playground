import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';


import { Member } from '../models/member.model';

@Injectable()
export class FamilyService {
    private membersUrl = 'http://0.0.0.0:8080/members';

    constructor(private httpClient: HttpClient) {}
    provideMembers(): Observable<Member[]> {
        return this.httpClient.get<Member[]>(this.membersUrl)
            .pipe(
                catchError(this.handleError<Member[]>('provideMembers', []))
            );
    }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
        };
      }
}
