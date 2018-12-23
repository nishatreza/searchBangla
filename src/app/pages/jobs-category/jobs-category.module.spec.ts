import { JobsCategoryModule } from './jobs-category.module';

describe('JobsCategoryModule', () => {
  let jobsCategoryModule: JobsCategoryModule;

  beforeEach(() => {
    jobsCategoryModule = new JobsCategoryModule();
  });

  it('should create an instance', () => {
    expect(jobsCategoryModule).toBeTruthy();
  });
});
