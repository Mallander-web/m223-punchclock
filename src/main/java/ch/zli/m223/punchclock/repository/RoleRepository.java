package ch.zli.m223.punchclock.repository;

import ch.zli.m223.punchclock.domain.Entry;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface RoleRepository {
  @Query(value = "SELECT id FROM Role")
  List<Entry> findAllRoles(Sort sort);
}
