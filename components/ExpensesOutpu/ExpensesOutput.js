import { FlatList } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2025-01-15')
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2024-01-15'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    data: new Date('2025-02-13')
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    data: new Date('2024-03-8')
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.59,
    data: new Date('2024-04-18')
  }
]

function ExpensesOutput({expenses, expensesPeriod}) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  )
}
export default ExpensesOutput;