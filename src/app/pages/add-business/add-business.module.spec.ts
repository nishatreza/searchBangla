import { AddBusinessModule } from './add-business.module';

describe('AddBusinessModule', () => {
  let addBusinessModule: AddBusinessModule;

  beforeEach(() => {
    addBusinessModule = new AddBusinessModule();
  });

  it('should create an instance', () => {
    expect(addBusinessModule).toBeTruthy();
  });
});
