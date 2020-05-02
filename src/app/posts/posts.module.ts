import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPostComponent } from './test-post/test-post.component';
import { TestPostTheSecondComponent } from './test-post-the-second/test-post-the-second.component';
import { PostNotFoundComponent } from './post-not-found/post-not-found.component';
// import { PostRoutingModule } from './post-routing.module';
import { Router, Route } from '@angular/router';
import { PostMetaDataService } from './post-meta-data.service';
import { PostMetaData } from './models/post-meta-data';
import { ReturnStatement } from '@angular/compiler';
import { PostLookupRegistry } from './post-registry';
import { DatabaseFinalProjectFromCollegeComponent } from './database-final-project-from-college/database-final-project-from-college.component';
import { PostDisplayComponent } from './post-display/post-display.component';



@NgModule({
  declarations: [
    TestPostComponent,
    TestPostTheSecondComponent,
    PostNotFoundComponent,
    DatabaseFinalProjectFromCollegeComponent,
    PostDisplayComponent
  ],
  imports: [
    CommonModule,
    // PostRoutingModule
  ]
})
export class PostsModule {
  constructor(router: Router, postMetaDataService: PostMetaDataService) {
    // Dynamically add routes based on metadata
    var currentRoutes: Route[] = router.config;
    postMetaDataService.getPostMetaData().subscribe(metaData => {
      var path: Route = {
        path: 'post',
        component: PostDisplayComponent,
        children: []
      }
      metaData.forEach((data) => {
        if (PostLookupRegistry.has(data.componentName)) {
          path.children.push({ path: data.postPathName, component: PostLookupRegistry.get(data.componentName) })
        }
      })

      currentRoutes.push(path);
      router.resetConfig(currentRoutes);
    });

  }
}
