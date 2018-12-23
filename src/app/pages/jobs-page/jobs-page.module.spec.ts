import { JobsPageModule } from './jobs-page.module';

describe('JobsPageModule', () => {
  let jobsPageModule: JobsPageModule;

  beforeEach(() => {
    jobsPageModule = new JobsPageModule();
  });

  it('should create an instance', () => {
    expect(jobsPageModule).toBeTruthy();
  });
});
