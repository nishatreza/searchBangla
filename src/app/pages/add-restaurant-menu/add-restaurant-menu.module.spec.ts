import { AddRestaurantMenuModule } from './add-restaurant-menu.module';

describe('AddRestaurantMenuModule', () => {
  let addRestaurantMenuModule: AddRestaurantMenuModule;

  beforeEach(() => {
    addRestaurantMenuModule = new AddRestaurantMenuModule();
  });

  it('should create an instance', () => {
    expect(addRestaurantMenuModule).toBeTruthy();
  });
});
