import { Component } from '@angular/core';
import { StoreService } from '../store.service';
/**
 * Render calendar
 * 
 * @export
 * @class CalendarComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  public days: string[] = [];
  public hours: number[] = [];
  public isLoaded: boolean = false;

  private cells = 15;
  private colls = 24;

  /**
   * add colls and rows in table
   * 
   * 
   * @memberOf CalendarComponent
   */
  renderTable(): void {

    this.days = [];
    this.hours = [];

    for (let i = 1; i <= this.cells; i++) {
      this.days.push("Oct " + i)
    }
    for (let i = 0; i <= this.colls; i++) {
      this.hours.push(i)
    }
  }

  constructor(private store: StoreService) {

  }

  /**
   * Control loading and render table
   * 
   * 
   * @memberOf CalendarComponent
   */
  loadData(): void {
    this.isLoaded = true;
    this.renderTable()
  }

  // TODO: add the ability to change a lot of data asynchronously

  // searchAll() {
  //   this.store.searchAllCells();
  // }


  /**
   * Click to head table
   * 
   * 
   * @memberOf CalendarComponent
   */
  dayHeaderClicked(): void {
    alert('dayHeaderClicked()');
  }
}
