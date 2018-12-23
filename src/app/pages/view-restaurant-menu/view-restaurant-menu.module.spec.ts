import { ViewRestaurantMenuModule } from './view-restaurant-menu.module';

describe('ViewRestaurantMenuModule', () => {
  let viewRestaurantMenuModule: ViewRestaurantMenuModule;

  beforeEach(() => {
    viewRestaurantMenuModule = new ViewRestaurantMenuModule();
  });

  it('should create an instance', () => {
    expect(viewRestaurantMenuModule).toBeTruthy();
  });
});
