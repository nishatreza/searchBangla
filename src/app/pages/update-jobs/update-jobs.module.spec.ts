import { UpdateJobsModule } from './update-jobs.module';

describe('UpdateJobsModule', () => {
  let updateJobsModule: UpdateJobsModule;

  beforeEach(() => {
    updateJobsModule = new UpdateJobsModule();
  });

  it('should create an instance', () => {
    expect(updateJobsModule).toBeTruthy();
  });
});
