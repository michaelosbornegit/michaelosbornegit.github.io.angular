import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostNotFoundComponent } from './post-not-found/post-not-found.component';
import { TestPostComponent } from './test-post/test-post.component';
import { TestPostTheSecondComponent } from './test-post-the-second/test-post-the-second.component';


var postRoutes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(postRoutes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
