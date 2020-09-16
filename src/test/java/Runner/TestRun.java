package Runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Aman\\Practice\\DropboxFramework\\src\\test\\java\\Features\\AddFile.feature",
		glue= {"StepDefination"},
		format= {"pretty", "html:test-output"}
		)


public class TestRun 
{

}
