import { NewsDetailsModule } from './news-details.module';

describe('NewsDetailsModule', () => {
  let newsDetailsModule: NewsDetailsModule;

  beforeEach(() => {
    newsDetailsModule = new NewsDetailsModule();
  });

  it('should create an instance', () => {
    expect(newsDetailsModule).toBeTruthy();
  });
});
