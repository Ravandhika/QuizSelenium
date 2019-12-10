const{Builder, By, Key, util} = require("selenium-webdriver");
 async function example(){
     let driver = await new Builder().forBrowser("firefox").build();
     await driver.get("https://demo.1crmcloud.com/login.php");
     const usrnm = By.name("user_name");
     const pass = By.name("user_password");
     const userlogo = By.className("meta-profile");
     await driver.findElement(usrnm).sendKeys("admin",Key.RETURN);
     await driver.findElement(pass).sendKeys("admin", Key.ENTER);
     await driver.sleep(10000);
     await driver.findElement(userlogo).click();
 }
 example();