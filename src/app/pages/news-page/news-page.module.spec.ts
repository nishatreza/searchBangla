import { NewsPageModule } from './news-page.module';

describe('NewsPageModule', () => {
  let newsPageModule: NewsPageModule;

  beforeEach(() => {
    newsPageModule = new NewsPageModule();
  });

  it('should create an instance', () => {
    expect(newsPageModule).toBeTruthy();
  });
});
