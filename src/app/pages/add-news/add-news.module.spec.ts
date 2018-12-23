import { AddNewsModule } from './add-news.module';

describe('AddNewsModule', () => {
  let addNewsModule: AddNewsModule;

  beforeEach(() => {
    addNewsModule = new AddNewsModule();
  });

  it('should create an instance', () => {
    expect(addNewsModule).toBeTruthy();
  });
});
