import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../services/family.service';

@Component({
  selector: 'members-list',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  selectedMember: any;
  familyMembers = [];

  constructor(private familyService: FamilyService) {
    this.familyMembers = familyService.provideMembers();
  }

  ngOnInit() {
    this.initialize();
  }

  selectMember(member) {
    this.selectedMember = member;
  }
  initialize() {
    this.familyMembers = !this.familyMembers.length ?
    this.familyService.provideMembers() : [];
  }
  getButtonTile() {
    return this.familyMembers.length ? 'RESET' : 'START';
 }
 filterMembers(term: string) {
   if (term.trim().length !== 0) {
    this.familyMembers = this.familyMembers.filter(member =>
    member.name.toLowerCase().includes(term));
   } else {
    this.familyMembers = this.familyService.provideMembers();
   }
  }
}

