import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

interface IDay {

}

interface IHour {

}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public days = [];
  public hours = [];
  public isLoaded: boolean = false;

  private cells = 15;
  private colls = 24;


  renderTable(): void {

    this.days = [];
    this.hours = [];

    for (let i = 1; i < this.cells; i++) {
      this.days.push("Oct " + i)
    }
    for (let i = 0; i < this.colls; i++) {
      this.hours.push(i)
    }
  }

  constructor(private store: StoreService) {

  }


  loadData(): void {
    this.isLoaded = true;
    this.renderTable()
  }


  // searchAll() {
  //   this.store.searchAllCells();
  // }


  dayHeaderClicked(): void {
    alert('dayHeaderClicked()');
  }

  ngOnInit() {
  }

}
