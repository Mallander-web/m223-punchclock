package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.ApplicationUser;
import ch.zli.m223.punchclock.domain.Entry;
import ch.zli.m223.punchclock.repository.ApplicationUserRepository;
import ch.zli.m223.punchclock.repository.EntryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
  private ApplicationUserRepository applicationUserRepository;

  public UserService(ApplicationUserRepository applicationUserRepository) {
    this.applicationUserRepository = applicationUserRepository;
  }

  public ApplicationUser createUser(ApplicationUser applicationUser) {
    return applicationUserRepository.saveAndFlush(applicationUser);
  }

  public void deleteUser(ApplicationUser applicationUser){applicationUserRepository.delete(applicationUser);}

  public ApplicationUser updateUser(ApplicationUser applicationUser){return applicationUserRepository.save(applicationUser);}

  public List<ApplicationUser> findAllUser() {
    return applicationUserRepository.findAll();
  }
}