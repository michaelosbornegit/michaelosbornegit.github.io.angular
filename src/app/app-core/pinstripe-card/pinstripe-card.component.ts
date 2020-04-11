import { Component, OnInit, Input } from '@angular/core';
import { PostMetaData } from 'src/app/posts/models/post-meta-data';

@Component({
  selector: 'app-pinstripe-card',
  templateUrl: './pinstripe-card.component.html',
  styleUrls: ['./pinstripe-card.component.scss']
})
export class PinstripeCardComponent implements OnInit {

  @Input() post: PostMetaData;

  constructor() { }

  ngOnInit(): void {
  }
}
