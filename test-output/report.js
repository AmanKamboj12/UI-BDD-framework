$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Aman/Practice/DropboxFramework/src/test/java/Features/AddFile.feature");
formatter.feature({
  "line": 1,
  "name": "Dropbox file upload feature",
  "description": "",
  "id": "dropbox-file-upload-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Dropbox file upload test",
  "description": "",
  "id": "dropbox-file-upload-feature;dropbox-file-upload-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Flickr",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on upload button",
  "keyword": "Then "
});
formatter.match({
  "location": "AddFile.user_is_on_login_page()"
});
formatter.result({
  "duration": 7734952500,
  "status": "passed"
});
formatter.match({
  "location": "AddFile.title_of_login_page_is_Dropbox()"
});
formatter.result({
  "duration": 13528000,
  "status": "passed"
});
formatter.match({
  "location": "AddFile.user_enters_username_and_password()"
});
formatter.result({
  "duration": 1449609900,
  "status": "passed"
});
formatter.match({
  "location": "AddFile.user_is_on_home_page()"
});
formatter.result({
  "duration": 4664717300,
  "status": "passed"
});
formatter.match({
  "location": "AddFile.user_click_on_upload_button()"
});
formatter.result({
  "duration": 3142489000,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d85.0.4183.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SIPLT993\u0027, ip: \u002710.20.44.50\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_265\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\AMAN~1.KAM\\AppData...}, goog:chromeOptions: {debuggerAddress: localhost:55988}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 20ff0558bba2faa808b1345dd183384a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat StepDefination.AddFile.user_click_on_upload_button(AddFile.java:62)\r\n\tat ✽.Then user click on upload button(C:/Aman/Practice/DropboxFramework/src/test/java/Features/AddFile.feature:9)\r\n",
  "status": "failed"
});
});