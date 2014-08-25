package org.openmrs.module.soddoregistration.api.db;

import org.openmrs.module.soddoregistration.SoddoRegions;
import org.springframework.transaction.annotation.Transactional;
import java.util.Date;
import java.util.List;

public interface SoddoRegionsDAO {

	public List<SoddoRegions> getAllRegions();
	
	SoddoRegions getRegion(Integer id);
	
	SoddoRegions saveRegion(SoddoRegions soddoRegions);
	
	void purgeRegion(SoddoRegions soddoRegions);

}




