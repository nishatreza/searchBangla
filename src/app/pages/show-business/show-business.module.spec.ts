import { ShowBusinessModule } from './show-business.module';

describe('ShowBusinessModule', () => {
  let showBusinessModule: ShowBusinessModule;

  beforeEach(() => {
    showBusinessModule = new ShowBusinessModule();
  });

  it('should create an instance', () => {
    expect(showBusinessModule).toBeTruthy();
  });
});
