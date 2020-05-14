import { Component, OnInit } from '@angular/core';
import List from '../mobiless';
import { DataService } from '../data.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mobiles: Object[];
  color: string='';
  pattern: string;
  filter: string;
  

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.mobiles = List;
    this.data.currentMessage.subscribe(message => this.filter = message)
  
  }

loadColor(): void{
  this.color = 'warn';
}

}
