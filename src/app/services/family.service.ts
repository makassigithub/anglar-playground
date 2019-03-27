import { Injectable } from '@angular/core';
import { Member } from '../models/member.model';

@Injectable()
export class FamilyService {
    provideMembers() {
        return [
            new Member('Salif', 'Traore', 38),
            new Member('Brahima', 'Traore', 35),
            new Member('Maimouna', 'Traore', 32),
            new Member('Aissata', 'Traore', 29),
            new Member('Losseni', 'Traore', 26),
            new Member('Karim', 'Traore', 23),
            new Member('Fati', 'Traore', 20),
            new Member('Allassane', 'Traore', 20),
        ];
    }
}
