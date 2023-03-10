import Homey from 'homey';

class OtherAppApi extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('MyApp has been initialized');
  }

  foo() {
    return "bar";
  }
  fooPost(body: any) {
    this.log(body);
    return body;
  }

}

module.exports = OtherAppApi;
