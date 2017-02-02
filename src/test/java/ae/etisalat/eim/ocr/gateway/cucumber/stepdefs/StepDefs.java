package ae.etisalat.eim.ocr.gateway.cucumber.stepdefs;

import ae.etisalat.eim.ocr.gateway.OcrApiGateway2App;

import org.springframework.boot.test.SpringApplicationContextLoader;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

@WebAppConfiguration
@ContextConfiguration(classes = OcrApiGateway2App.class, loader = SpringApplicationContextLoader.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
