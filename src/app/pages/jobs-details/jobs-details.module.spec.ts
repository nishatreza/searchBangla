import { JobsDetailsModule } from './jobs-details.module';

describe('JobsDetailsModule', () => {
  let jobsDetailsModule: JobsDetailsModule;

  beforeEach(() => {
    jobsDetailsModule = new JobsDetailsModule();
  });

  it('should create an instance', () => {
    expect(jobsDetailsModule).toBeTruthy();
  });
});
