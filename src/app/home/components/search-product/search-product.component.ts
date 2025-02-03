import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {
  faSearch = faSearch;
  searchSubject = new Subject<string>(); // Use string for better type safety
  debouncerTime = 3000;
  
  @Output() searchEvent = new EventEmitter<string>();

  constructor(private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(this.debouncerTime)).subscribe((searchValue) => {
      this.searchEvent.emit(searchValue);
      this.cdr.detectChanges();
    });
  }

  searchProduct(event: any) {
    this.searchSubject.next(event.target.value); 
    this.searchEvent.emit(event.target.value);
    this.cdr.detectChanges();
  }
}
