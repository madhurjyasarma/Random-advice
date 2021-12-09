package com.random.advice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AdviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdviceApplication.class, args);
		System.out.println("Started application");
	}

}
