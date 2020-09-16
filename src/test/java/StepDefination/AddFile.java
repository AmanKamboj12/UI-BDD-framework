package StepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;

public class AddFile 
{
	
WebDriver driver;
WebDriverWait wait;

	@Given("^user is on login page$")
	public void user_is_on_login_page() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Aman.Kamboj\\Downloads\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://identity.flickr.com/");
		
	}
	
	@When("^title of login page is Flickr$")
	public void title_of_login_page_is_Dropbox() {
		String pageTitle = driver.getTitle();
		System.out.println("Login page title" + " " + pageTitle);
		Assert.assertEquals("Flickr Login", pageTitle);	
	}
	
	@Then("^user enters username and password$")
	public void user_enters_username_and_password()  {
	    driver.findElement(By.id("login-email")).sendKeys("testautomation1207@gmail.com");
	    driver.findElement(By.xpath("//span[contains(.,'Next')]")).click();
	    wait = new WebDriverWait(driver, 10);
	    WebElement element = wait.until(
	    	    ExpectedConditions.visibilityOfElementLocated(By.id("login-password"))
	    	);
        driver.findElement(By.id("login-password")).sendKeys("Testing@1234");
        driver.findElement(By.xpath("//button[contains(.,'Sign in')]")).click();
	}
	
	@Then("^user is on home page$")
	public void user_is_on_home_page() throws Exception{
		Thread.sleep(3000);
		String homeTitle = driver.getTitle();
		System.out.println(homeTitle);
		Assert.assertEquals("Home | Flickr", homeTitle);	
	}
	
	@Then("^user click on upload button$")
	public void user_click_on_upload_button()throws Exception{
		Thread.sleep(3000);		
		driver.findElement(By.xpath("//i[@class='upload-icon']")).sendKeys("path of file to upload");
	}
	
	
}
