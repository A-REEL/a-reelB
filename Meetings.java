package com.nighthawk.spring_portfolio.mvc.jokes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;

@Data  
@NoArgsConstructor
@AllArgsConstructor
@Entity 
public class Meetings {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(unique=true)
    private String meetingName;

    private String description;


    public static String[] init() {
        Meetings meeting = new Meetings();
        meeting.setMeetingName("meeting");
        meeting.setDescription("creating the database for meeting notes");
        return meeting;
    }
}
