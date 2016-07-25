var driver = new webdriver.Builder().usingServer('http://hub-cloud.browserstack.com/wd/hub').withCapabilities({
  'browserName' : 'firefox'
}).build()