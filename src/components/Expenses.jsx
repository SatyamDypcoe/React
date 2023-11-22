import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
function Expenses(props){
    return <div className="expenses">
         <ExpenseItem tittle = {props.items[0].tittle}
        amount ={props.items[0].amount}
        date ={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem tittle = {props.items[1].tittle}
        amount ={props.items[1].amount}
        date ={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem tittle = {props.items[2].tittle}
        amount ={props.items[2].amount}
        date ={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem tittle = {props.items[3].tittle}
        amount ={props.items[3].amount}
        date ={props.items[3].date}
        ></ExpenseItem>
    </div>
}

export default Expenses;