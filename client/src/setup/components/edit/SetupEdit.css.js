export const styles = theme => ({
  appBar: {
    position: "relative"
  },
  toolbar: {
    flex: 1
  },
  container: {
    display: "flex",
    flexDirection: "column"
  },
  inputControl: {
    display: "flex"
  },
  textField: {
    marginRight: theme.spacing.unit
  },
  formGroup: {
    ...theme.mixins.gutters(),
    margin: theme.spacing.unit * 1,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    title: {
      color: theme.palette.secondary
    }
  }
});
