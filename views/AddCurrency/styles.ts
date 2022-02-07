import { StyleSheet } from "react-native";
import colors from "../../assets/stylesRoot/colors";

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 24,
    flex: 1,
    paddingTop: '50%'
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24
  },
  input: {
    padding: 10,
    height: 56,
    width: '100%',
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 16,
    fontSize: 16
  },
  buttonContainer: {
    alignItems: 'flex-end'
  },
  button: {
    width: '45%',
    height: 48,
    backgroundColor: colors.primaryYellow,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  textButton: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primaryBlue
  }
});

export default styles
