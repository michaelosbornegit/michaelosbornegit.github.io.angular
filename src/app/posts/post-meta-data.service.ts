import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostMetaData } from './models/post-meta-data';
import { POSTMETADATA } from './post-meta-data';

@Injectable({
  providedIn: 'root'
})
export class PostMetaDataService {

  constructor() {
  }

  getPostMetaData(): Observable<PostMetaData[]> {
    return of(POSTMETADATA);
  }
}
