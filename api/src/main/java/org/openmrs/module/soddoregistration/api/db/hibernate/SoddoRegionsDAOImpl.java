package org.openmrs.module.soddoregistration.api.db.hibernate;
import org.hibernate.SessionFactory;
import org.hibernate.Session;
import org.openmrs.module.soddoregistration.SoddoRegions;
import org.openmrs.module.soddoregistration.api.db.SoddoRegionsDAO;
import java.util.Date;
import java.util.List;

public class SoddoRegionsDAOImpl implements SoddoRegionsDAO {
	private SessionFactory sessionFactory;
	
	/**
     * @param sessionFactory the sessionFactory to set
     */
    public void setSessionFactory(SessionFactory sessionFactory) {
            this.sessionFactory = sessionFactory;
    }
    /**
     * @return the sessionFactory
     */
    public SessionFactory getSessionFactory() {
            return sessionFactory;
    }

	@Override
	public List<SoddoRegions> getAllRegions() {
		return sessionFactory.getCurrentSession().createCriteria(SoddoRegions.class).list();
	}

	@Override
	public SoddoRegions getRegion(Integer id) {
        return (SoddoRegions) sessionFactory.getCurrentSession().get(SoddoRegions.class, id);
	}
	
	@Override
	public SoddoRegions saveRegion(SoddoRegions soddoRegions) {
		sessionFactory.getCurrentSession().save(soddoRegions);
        return soddoRegions;
	}

	@Override
	public void purgeRegion(SoddoRegions soddoRegions) {
        sessionFactory.getCurrentSession().delete(soddoRegions);
	}

}
