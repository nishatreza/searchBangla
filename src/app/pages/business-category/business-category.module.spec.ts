import { BusinessCategoryModule } from './business-category.module';

describe('BusinessCategoryModule', () => {
  let businessCategoryModule: BusinessCategoryModule;

  beforeEach(() => {
    businessCategoryModule = new BusinessCategoryModule();
  });

  it('should create an instance', () => {
    expect(businessCategoryModule).toBeTruthy();
  });
});
