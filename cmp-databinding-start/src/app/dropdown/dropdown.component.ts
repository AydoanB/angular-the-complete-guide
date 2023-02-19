import { Component, OnInit } from '@angular/core';
import { DropdownRequestService } from '../dropdown-request.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  selectedValue: string;
  yearlyInvUrl: string = 'https://swapi.dev/api/people/';
  monthlyInvUrl: string = 'http://swapi.dev/api/planets/';
  lists: {};
  constructor(private service: DropdownRequestService) { }

  ngOnInit(): void {
  }

  sendRequest() {
    console.log(this.selectedValue);
    
    this.service.get(this.selectedValue).subscribe((ret: {results: {name: string}}) => {
      console.log(ret.results[0].name);
    });
  }
}
