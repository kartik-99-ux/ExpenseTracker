import axios from "axios";
const GET_API_URL = "http://localhost:8080/api/expenses/getexpenses";
const POST_API_URL = "http://localhost:8080/api/expenses/addexpense";
const delete_url = "http://localhost:8080/api/expenses/delete";
export const getExpenses = () => {
  return axios.get(GET_API_URL);
};
export const addExpense = (expense) => {
  return axios.post(POST_API_URL, expense);
};
export const deleteExpense = (id) => axios.delete(`${delete_url}/${id}`);
