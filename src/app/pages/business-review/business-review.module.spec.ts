import { BusinessReviewModule } from './business-review.module';

describe('BusinessReviewModule', () => {
  let businessReviewModule: BusinessReviewModule;

  beforeEach(() => {
    businessReviewModule = new BusinessReviewModule();
  });

  it('should create an instance', () => {
    expect(businessReviewModule).toBeTruthy();
  });
});
