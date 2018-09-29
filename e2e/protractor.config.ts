import {Config} from 'protractor';
import * as tsNode from 'ts-node';

const serverAddress = 'http://localhost:4723/wd/hub';
const testFilePAtterns: Array<string> = [
  '**/*/*.e2e-spec.ts'
];
const iPhoneXCapability = {
  browserName: '',
  autoWebview: true,
  autoWebviewTimeout: 20000,
  app: '/Users/dsbr/ordina/e2e/superApp/platforms/ios/build/emulator/superApp.app',
  version: '11.4',
  platform: 'iOS',
  deviceName: 'iPhone X',
  platformName: 'iOS',
  name: 'My First Mobile Test',
  automationName: 'XCUITest'
};
const androidPixel2XLCapability = {
  browserName: '',
  autoWebview: true,
  autoWebviewTimeout: 20000,
  platformName: 'Android',
  deviceName: 'pixel2xl',
  app: '/Users/dsbr/ordina/e2e/superApp/platforms/android/build/outputs/apk/android-debug.apk',
  'app-package': 'be.kbc.appyourservice',
  'app-activity': 'MainActivity',
  nativeWebTap: 'true',
  autoAcceptAlerts: 'true',
  autoGrantPermissions: 'true',
  newCommandTimeout: 300000
};

export let config: Config = {
  allScriptsTimeout: 11000,
  specs: testFilePAtterns,
  baseUrl: '',
  multiCapabilities: [
    androidPixel2XLCapability,
    iPhoneXCapability
  ],
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  seleniumAddress: serverAddress,
  onPrepare: () => {
    tsNode.register({
      project: 'e2e/tsconfig.json'
    });
  }
};
