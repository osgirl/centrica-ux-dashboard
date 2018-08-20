import { StyleSheet } from "aphrodite/no-important";

export const styles = StyleSheet.create({
  item: {
    background: "#fff",
    border: "1px solid #eee",
    padding: 10,
    margin: 5,
    flex: "1 0 20%",
    textDecoration: "none",
    borderRadius: 5,
    ":hover": {
      background: "#f0f0f0",
      borderColor: "#e0e0e0"
    }
  },
  prioStyles: {
    borderColor: "red",
    display: "block",
    flex: "1 0 0 "
  },
  title: {
    fontSize: 14,
    color: "#333"
  }
});
