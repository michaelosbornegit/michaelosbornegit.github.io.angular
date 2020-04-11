import { Component, OnInit } from '@angular/core';
import { PostMetaData } from '../models/post-meta-data';
import { PostLookup } from '../post-registry';

@PostLookup('TestPostComponent')
@Component({
  selector: 'app-test-post',
  templateUrl: './test-post.component.html',
  styleUrls: ['./test-post.component.scss']
})
export class TestPostComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
