import { Component, OnInit } from '@angular/core';
import { PostMetaData } from 'src/app/posts/models/post-meta-data';
import { PostMetaDataService } from 'src/app/posts/post-meta-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  postMetaData: PostMetaData[] = [];

  constructor(private postMetaDataService: PostMetaDataService) { }

  ngOnInit(): void {
    this.postMetaDataService.getPostMetaData().subscribe(metadata => this.postMetaData = metadata);
  }

  getPosts(): void {
    // this.postMetaDataService.getPosts()
    //   .subscribe(posts => this.posts = posts)
  }

}
