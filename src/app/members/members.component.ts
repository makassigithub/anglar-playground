import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'members-list',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  selectedMember: any;
  familyMembers = [];
  data = [
    { name: 'Salif', age: '38' },
    { name: 'Brahima', age: '35' },
    { name: 'Maimouna', age: '32' },
    { name: 'Aissata', age: '29' },
    { name: 'Losseni', age: '26' },
    { name: 'Karim', age: '23' },
    { name: 'Fati', age: '20' },
    { name: 'Allassane', age: '20' }
];
  ngOnInit() {
    this.initialize();
  }

  changeValue(event: any) {
    console.log(`Inside members-lis ${event}`);
  }
  selectMember(member) {
    this.selectedMember = member;
  }
  initialize() {
    this.familyMembers = !this.familyMembers.length ?
    this.data : [];
  }
  getButtonTile() {
    return this.familyMembers.length ? 'RESET' : 'START';
 }
 filterMembers(term: string) {
   if (term.trim().length !== 0) {
    this.familyMembers = this.familyMembers.filter(member =>
    member.name.toLowerCase().includes(term));
   } else {
    this.familyMembers = this.data;
   }
  }
}

