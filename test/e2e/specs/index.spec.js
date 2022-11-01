/* eslint-disable no-undef */
const Page = require('../pageObjects/main.page');

describe('Example test', () => {
  it('should open correct app', async () => {
    Page.open();
    await expect(browser).toHaveTitle('moviehub-nuxt-vuetify');
  });
});
