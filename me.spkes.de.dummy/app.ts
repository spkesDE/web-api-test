import Homey, {ApiApp} from 'homey';

class MyApp extends Homey.App {
  private otherAppApi: Homey.Api | undefined;

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('Initialing...')
    this.otherAppApi = this.homey.api.getApiApp('me.spkes.de');
    if(this.otherAppApi == undefined) {
      this.log('No API');
    }
    this.log('getting status');
    await (this.otherAppApi as any).getInstalled().then(this.log);
    this.log('getting version');
    await (this.otherAppApi as any).getVersion().then(this.log);

    this.log('Get request - expected bar')
    await this.otherAppApi.get('/').then(this.log).catch(this.error);
    this.log('POST response - expected null')
    await this.otherAppApi.post('/', {foo: "bar"}).then(this.log).catch(this.error);

    this.log('MyApp has been initialized');
  }

}

module.exports = MyApp;
