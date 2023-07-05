import { NumberFormatStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  control=new FormControl();
  name = 'Angular 6';
  public searchText: string;
  userNameSearchText = new Subject<string>();
  @Output() onSearch = new EventEmitter<string>();
  @Input() numOfUser: number;
  constructor() { 
    // Debounce search.
    // this.userQuestionUpdate.pipe(
    //   debounceTime(400),
    //   distinctUntilChanged())
    //   .subscribe(value => {
    //     this.onSearch.emit(value)
    //   });
  }

  ngOnInit() {
    
  }

  onSearching() {
        this.onSearch.emit(this.searchText)
  }

  onClear() {
    this.searchText = ''
  }


}
