import { UpdateBusinessModule } from './update-business.module';

describe('UpdateBusinessModule', () => {
  let updateBusinessModule: UpdateBusinessModule;

  beforeEach(() => {
    updateBusinessModule = new UpdateBusinessModule();
  });

  it('should create an instance', () => {
    expect(updateBusinessModule).toBeTruthy();
  });
});
