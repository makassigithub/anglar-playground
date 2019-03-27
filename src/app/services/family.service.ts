import { Injectable } from '@angular/core';
import { Member } from '../models/member.model';

@Injectable()
export class FamilyService {
    provideMembers() {
        return [
            new Member('Salif', 38),
            new Member('Brahima', 35),
            new Member('Maimouna', 32),
            new Member('Aissata', 29),
            new Member('Losseni', 26),
            new Member('Karim', 23),
            new Member('Fati', 20),
            new Member('Allassane', 20),
        ];
    }
}
