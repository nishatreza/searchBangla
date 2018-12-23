import { CommonuiModule } from './commonui.module';

describe('CommonuiModule', () => {
  let commonuiModule: CommonuiModule;

  beforeEach(() => {
    commonuiModule = new CommonuiModule();
  });

  it('should create an instance', () => {
    expect(commonuiModule).toBeTruthy();
  });
});
