import { StyleSheet } from "react-native";
import colors from "../../assets/stylesRoot/colors";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background,
    paddingBottom: 50,
    flex: 1
  },
  headerContainer: {
    width: '100%',
    height: 130,
    backgroundColor: colors.primaryBlue,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 42,
    marginBottom: 18
  },
  headerTitle: {
    color: colors.background,
    fontSize: 20,
    fontWeight: '700'
  },
  userPhoto: {
    borderRadius: 24,
    height: 48,
    width: 48,
  },
  noCryptoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 4,
    borderColor: colors.secondGray,
    backgroundColor: colors.primaryGray,
    borderWidth: 1
  },
  noCryptoText: {
    color: colors.thirdGray
  },
  currenciesContainer: {
    paddingHorizontal: 24
  },
  button: {
    textAlign: 'center',
    color: colors.primaryBlue,
    fontSize: 16,
    marginTop: 50
  }
});

export default styles