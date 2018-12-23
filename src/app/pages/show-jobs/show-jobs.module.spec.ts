import { ShowJobsModule } from './show-jobs.module';

describe('ShowJobsModule', () => {
  let showJobsModule: ShowJobsModule;

  beforeEach(() => {
    showJobsModule = new ShowJobsModule();
  });

  it('should create an instance', () => {
    expect(showJobsModule).toBeTruthy();
  });
});
