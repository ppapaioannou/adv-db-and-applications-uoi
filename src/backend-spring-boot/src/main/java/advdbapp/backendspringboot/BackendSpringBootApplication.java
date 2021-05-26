package advdbapp.backendspringboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


/*
                    --Main--


Nothing much to say here except that there is an application.properties
file in the src/backend-spring-boot/src/main/resources folder
that is used for this app containing a dummy user
and a password that has priviligies for MySQL Database


*/

@SpringBootApplication
public class BackendSpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendSpringBootApplication.class, args);
	}

}
