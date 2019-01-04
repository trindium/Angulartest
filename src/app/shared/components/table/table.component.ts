import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: string[];
  @Input() columns: string[];
  @Input() hoverEffect: boolean;
  @Input() tableStyle: ""  | "table-primary" | "table-info" | "table-inverse";
  @Input() tableSize: "" | "table-xl" | "table-lg" | "table-de" | "table-sm" | "table-xs";
  @Input() tableBorders: "" | "table-framed" | "table-bordered" | "table-framed table-bordered";
  @Input() tableHeadStyle: "" | "table-primary" | "table-info";
  
  ngOnInit() {
  }

}
