package com.nighthawk.spring_portfolio.mvc.jokes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController // annotation to simplify the creation of RESTful web services
@RequestMapping("/api/meetings")  // all requests in file begin with this URI
public class MeetingsAPIController {

    // Autowired enables Control to connect URI request and POJO Object to easily for Database CRUD operations
    @Autowired
    private MeetingsJpaRepository repository;

    /* GET List of Jokes
     * @GetMapping annotation is used for mapping HTTP GET requests onto specific handler methods.
     */
    @GetMapping("/")
    public ResponseEntity<List<Meetings>> getMeetings() {
        // ResponseEntity returns List of Jokes provide by JPA findAll()
        return new ResponseEntity<>( repository.findAll(), HttpStatus.OK);
    }

    /* Update Like
     * @PutMapping annotation is used for mapping HTTP PUT requests onto specific handler methods.
     * @PathVariable annotation extracts the templated part {id}, from the URI
     */
    @PostMapping("/like/{id}")
    public ResponseEntity<Meetings> setLike(@PathVariable long id) {
        /* 
        * Optional (below) is a container object which helps determine if a result is present. 
        * If a value is present, isPresent() will return true
        * get() will return the value.
        */
        Optional<Meetings> optional = repository.findById(id);
        if (optional.isPresent()) {  // Good ID
            Meetings meeting = optional.get();  // value from findByID
            meeting.setHaha(meeting.getHaha()+1); // increment value
            repository.save(meeting);  // save entity
            return new ResponseEntity<>(meeting, HttpStatus.OK);  // OK HTTP response: status code, headers, and body
        }
        // Bad ID
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);  // Failed HTTP response: status code, headers, and body
    }

    /* Update Jeer
     */
    @PostMapping("/jeer/{id}")
    public ResponseEntity<Meetings> setJeer(@PathVariable long id) {
        Optional<Meetings> optional = repository.findById(id);
        if (optional.isPresent()) {  // Good ID
            Meetings meeting = optional.get();
            meeting.setBoohoo(meeting.getBoohoo()+1);
            repository.save(meeting);
            return new ResponseEntity<>(meeting, HttpStatus.OK);
        }
        // Bad ID
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
