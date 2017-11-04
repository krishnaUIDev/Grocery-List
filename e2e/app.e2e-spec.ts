import { GroceryListPage } from './app.po';

describe('grocery-list App', () => {
  let page: GroceryListPage;

  beforeEach(() => {
    page = new GroceryListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
