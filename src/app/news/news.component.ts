import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { NewsService } from './news.service';
import { Article } from './article.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit, OnDestroy {

  isLoading: boolean = true;

  articles: Article[];
  articlesSub: Subscription;

  constructor(
    private auth: AuthService,
    private news: NewsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.articlesSub = this.news.getAllArticles()
      .subscribe((articles: Article[]) => {
        this.articles = this.sortByDate(articles);
      })
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  sortByDate(array) {
    return array.sort((a, b) => {
      a = new Date(a.createdAt);
      b = new Date(b.createdAt);
      return a > b ? -1 : a < b ? 1 : 0;
    });
  }

  onAddArticle() {
    this.router.navigate(['/news/add']);
  }

  onDeleteArticle(id) {
    this.news.deleteOneArticle(id);
    this.articles = this.articles.filter(el => el._id != id);
  }

  Redirect(id) {
    console.warn(id);
  }

  ngOnDestroy() {
    this.articlesSub.unsubscribe();
  }

}
