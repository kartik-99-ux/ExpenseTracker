package com.expensetracker;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "*")
public class ExpenseController {
	@Autowired
	private ExpenseRepository expenseRepo;
	Logger logger = LogManager.getLogger(ExpenseController.class);

	@GetMapping("getexpenses")
	public List<Expense> getAllExpenses() {
		return expenseRepo.findAll();
	}

	@PostMapping("addexpense")
	public Expense addExpense(@RequestBody Expense expense) {
		return expenseRepo.save(expense);
	}

	@DeleteMapping("delete")
	public void deleteExpense(@PathVariable String id) {
		expenseRepo.deleteById(id);
	}

}
