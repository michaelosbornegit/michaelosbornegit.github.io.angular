import { Component, OnInit } from '@angular/core';
import { PostLookup } from '../post-registry';

@PostLookup('DatabaseFinalProjectFromCollegeComponent')
@Component({
  selector: 'app-database-final-project-from-college',
  templateUrl: './database-final-project-from-college.component.html',
  styleUrls: ['./database-final-project-from-college.component.scss']
})
export class DatabaseFinalProjectFromCollegeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
