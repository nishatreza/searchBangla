import { JobApplyModule } from './job-apply.module';

describe('JobApplyModule', () => {
  let jobApplyModule: JobApplyModule;

  beforeEach(() => {
    jobApplyModule = new JobApplyModule();
  });

  it('should create an instance', () => {
    expect(jobApplyModule).toBeTruthy();
  });
});
