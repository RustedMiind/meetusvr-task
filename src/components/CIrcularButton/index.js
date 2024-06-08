import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";

function CircularButton(props) {
  return (
    <Button
      variant="outlined"
      size="small"
      {...props}
      sx={{
        borderColor: grey[300],
        p: 0,
        fontSize: 12,
        borderRadius: 1000,
        width: "60px",
        height: "60px",
        maxWidth: "60px",
        maxHeight: "60px",
        minWidth: "unset",
        minHeight: "unset",
        textTransform: "unset",
        bgcolor: props.focused ? grey[300] : undefined,
        ...props.sx,
      }}
    />
  );
}

export default CircularButton;
