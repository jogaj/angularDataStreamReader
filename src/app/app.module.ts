
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PostsEffects } from './stores/effects/posts.effects';
import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { filterReducer, postsReducer, statsReducer } from './stores/reducers';

import { AppComponent } from './app.component';
import { DataStreamServiceEmuService } from './services/data-stream-service-emu.service';
import { InterceptorService } from './services/interceptor.service';
import { MainComponent } from './components/main/main.component';
import { PostFilterComponent } from './components/post-filter/post-filter.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostComponent } from './components/post/post.component';
import { PostOwnerPipePipe } from './pipes/post-owner-pipe.pipe';
import { PostStatisticsComponent } from './components/post-statistics/post-statistics.component';
import { StatusComponent } from './components/status/status.component';

import { MaterialExtractModule } from './material.module';
import { postsFilteredReducer } from './stores/reducers/postFiltered.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostComponent,
    PostOwnerPipePipe,
    PostFilterComponent,
    PostStatisticsComponent,
    MainComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialExtractModule, 
    // StoreDevtoolsModule.instrument({
    //   maxAge: 4,
    // }),
    EffectsModule.forRoot([PostsEffects]),
    StoreModule.forRoot({posts: postsReducer, filter: filterReducer, stats: statsReducer, postFiltered: postsFilteredReducer})
  ],
  providers: [
    DataStreamServiceEmuService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
