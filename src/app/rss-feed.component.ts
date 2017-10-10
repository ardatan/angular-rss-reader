import { Component, OnInit, Input } from '@angular/core';

import { RSSParserService } from './rss-parser.service';

import { RSSParsed } from 'rss-parser';

@Component({
  selector: 'rss-feed',
  template: `
    <p> <b>Feed URL:</b> {{rssParsed.feed.feedUrl}} </p>
    <p> <b>Title:</b> {{rssParsed.feed.title}} </p>
    <p> <b>Description:</b> {{rssParsed.feed.description}} </p>
    <p> <b>{{rssParsed.feed.link}}</b> </p>
    <strong> Entries: </strong>
    <ul>
      <li *ngFor="let entry of rssParsed.feed.entries">
        <p> <b>Title:</b> {{entry.title}}
        <p> <b>Link:</b> {{entry.link}}
        <p> <b>Published Date:</b> {{entry.pubDate}}
        <p> <b>Creator:</b> {{entry.creator}}
        <p> <b>Content:</b> {{entry.content}}
        <p> <b>Content Snippet:</b> {{entry.contentSnippet}}
        <p> <b>Guid:</b> {{entry.guid}}
        <p> <b>Categories:</b>
          <strong *ngFor="let category of categories">
            {{category}}
          </strong>
        ISO Date: {{entry.isoDate}}
      </li>
    </ul>
  `
})
export class RSSFeedComponent implements OnInit {

  @Input() url: string;
  rssParsed: RSSParsed;

  constructor(private rssParser: RSSParserService) { }

  ngOnInit() {
    this.rssParser.parseURL(this.url).subscribe(rssParsed => {
      this.rssParsed = rssParsed;
    });

  }

}
