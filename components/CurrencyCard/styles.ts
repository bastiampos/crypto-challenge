import { StyleSheet } from "react-native";
import colors from "../../assets/stylesRoot/colors";

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    padding: '1%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 24,
    borderBottomWidth: 0.4,
    borderBottomColor: colors.primaryGray,
    alignItems: 'center'
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: colors.primaryGray,
    marginRight: 7
  },
  boldText: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'right'
  },
  span: {
    textAlign: 'right',
  },
  percent: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default styles
