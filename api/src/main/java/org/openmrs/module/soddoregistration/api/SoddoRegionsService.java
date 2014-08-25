package org.openmrs.module.soddoregistration.api;

import org.dom4j.DocumentException;
import org.openmrs.api.OpenmrsService;
import org.springframework.transaction.annotation.Transactional;
import org.xml.sax.SAXException;
import org.openmrs.module.soddoregistration.SoddoRegions;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.xpath.XPathExpressionException;

import java.io.IOException;
import java.util.Date;
import java.util.List;

public interface SoddoRegionsService extends OpenmrsService  {
	
	@Transactional(readOnly = true)
    public List<SoddoRegions> getAllRegions();
	
	@Transactional (readOnly = true)
	SoddoRegions getRegion(Integer id);
	
	SoddoRegions saveRegion(SoddoRegions soddoRegions);
	
	void purgeRegion(SoddoRegions soddoRegions);

}
