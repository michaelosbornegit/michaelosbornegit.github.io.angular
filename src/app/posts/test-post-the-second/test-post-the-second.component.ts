import { Component, OnInit } from '@angular/core';
import { PostMetaData } from '../models/post-meta-data';
import { PostLookup } from '../post-registry';

@PostLookup('TestPostTheSecondComponent')
@Component({
  selector: 'app-test-post-the-second',
  templateUrl: './test-post-the-second.component.html',
  styleUrls: ['./test-post-the-second.component.scss']
})
export class TestPostTheSecondComponent implements OnInit {

  constructor() {
    console.log("child called");

  }

  ngOnInit(): void {
  }

}
