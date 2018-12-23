import { ShowNewsModule } from './show-news.module';

describe('ShowNewsModule', () => {
  let showNewsModule: ShowNewsModule;

  beforeEach(() => {
    showNewsModule = new ShowNewsModule();
  });

  it('should create an instance', () => {
    expect(showNewsModule).toBeTruthy();
  });
});
