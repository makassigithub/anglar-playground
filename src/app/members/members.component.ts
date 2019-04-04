import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../services/family.service';

import { Member } from '../models/member.model';

@Component({
  selector: 'members-list',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  selectedMember: Member;
  familyMembers: Member[] = [];
  cachedMembers: Member [] = [];

  constructor(private familyService: FamilyService) {}

  ngOnInit() {
    this.fetchMembersData();
  }

  fetchMembersData() {
    this.familyService.provideMembers()
    .subscribe(members => {
      console.log(JSON.stringify(members));
      this.familyMembers = this.cachedMembers = members;
    });
  }
  selectMember(member) {
    this.selectedMember = member;
  }
  initialize() {
    this.familyMembers = !this.familyMembers.length ?
    this.cachedMembers : [];
  }
  getButtonTile() {
    return this.familyMembers.length ? 'RESET' : 'START';
 }
 filterMembers(term: string) {
   if (term.trim().length !== 0) {
    this.familyMembers = this.cachedMembers.filter(member =>
    member.firstName.toLowerCase().includes(term));
   } else {
    this.familyMembers = this.cachedMembers;
   }
  }

  clearSelection() {
    this.selectedMember = null;
  }
}

