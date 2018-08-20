import { StyleSheet } from "aphrodite/no-important";

export const styles = StyleSheet.create({
  header: {
    background: "linear-gradient(to right,#005EB8,#0275d8 65%)",
    padding: "10px 0"
  },
  title: {
    fontSize: 18,
    color: "#fff",
    padding: "0",
    margin: "0 auto",
    maxWidth: 1140
  },
  itemList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: 1140,
    margin: "20px auto",
    padding: 0
  },
  friday: {
    padding: 50,
    maxWidth: 1140,
    margin: "0 auto"
  },
  fridayTitle: {
    textAlign: "center"
  },
  fridaySubtitle: {
    color: "#555",
    fontSize: 14,
    fontWeight: 400,
    textAlign: "center",
    display: "block",
    paddingBottom: 30
  }
});
