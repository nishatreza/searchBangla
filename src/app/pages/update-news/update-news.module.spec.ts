import { UpdateNewsModule } from './update-news.module';

describe('UpdateNewsModule', () => {
  let updateNewsModule: UpdateNewsModule;

  beforeEach(() => {
    updateNewsModule = new UpdateNewsModule();
  });

  it('should create an instance', () => {
    expect(updateNewsModule).toBeTruthy();
  });
});
