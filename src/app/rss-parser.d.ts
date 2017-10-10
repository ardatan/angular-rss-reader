declare module "rss-parser" {
  interface RSSParsed {
    feed: RSSFeed;
  }

  interface RSSFeed {
    feedUrl: string;
    title: string;
    description: string;
    link: string;
    entries: RSSEntry[];
  }

  interface RSSEntry {
    title: string;
    link: string;
    pubDate: string;
    creator: string;
    content: string;
    contentSnippet: string;
    guid: string;
    categories: string[];
    isoDate: string;
  }

  interface ParserCallback { (err: Error, parsed: RSSParsed): void }

  function parseString(xml: string, callback: ParserCallback);
  function parseURL(url: string, callback: ParserCallback);
  function parseFile(filename: string, callback: ParserCallback);

}
