/// <reference path="./rss-parser.d.ts" />

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { parseString, parseFile, parseURL, RSSParsed } from 'rss-parser';

@Injectable()
export class RSSParserService {
  parseString(xml: string): Observable<RSSParsed> {
    return Observable.bindNodeCallback(parseString)(xml);
  }
  parseFile(filename: string): Observable<RSSParsed> {
    return Observable.bindNodeCallback(parseFile)(filename);
  }
  parseURL(url: string): Observable<RSSParsed> {
    return Observable.bindNodeCallback(parseURL)(url);
  }
}
