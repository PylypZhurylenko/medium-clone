import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss'],
})
export class TagFeedComponent implements OnInit {
  apiUrl = '/articles';
  tagName: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tagName = this.route.snapshot.paramMap.get('slug');
    this.apiUrl = `/articles?tag=${this.tagName}`;
    console.log(this.tagName);
  }
}
