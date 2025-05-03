package com.expensetracker;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "expenses")
@Data
@NoArgsConstructor
public class Expense {
	@Id
	private String id;
	private String title;
	private Double amount;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;

}
