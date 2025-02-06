import { Text, View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/stylse";
import Button from "../components/UI/Button";
function ManageExpense({route, navigation}) {
  const editedExpenseId = route.params?.expenseId;
  const isEditting = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditting ? 'Edit Expense' : 'Add Expense'
    }); 
  }, [navigation, isEditting]);

  function deleteExpenseHandler () {}

  function cancelHandler() {}

  function confirmHandler() {}

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode="flat" onPress={cancelHandler}>Cancel</Button>
        <Button onPress={confirmHandler}>{isEditting ? 'Update': 'Add'}</Button>
      </View>
      {isEditting && (
        <View style={styles.deleteContainer}>
          <IconButton 
            icon='trash'
            color={GlobalStyles.colors.error500} 
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  )
}
export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  },

})