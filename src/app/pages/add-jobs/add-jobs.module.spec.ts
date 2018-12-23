import { AddJobsModule } from './add-jobs.module';

describe('AddJobsModule', () => {
  let addJobsModule: AddJobsModule;

  beforeEach(() => {
    addJobsModule = new AddJobsModule();
  });

  it('should create an instance', () => {
    expect(addJobsModule).toBeTruthy();
  });
});
