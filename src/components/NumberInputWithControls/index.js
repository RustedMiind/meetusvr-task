import { Box, IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function NumberInputWithControls(props) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        className="plain-input"
        sx={{
          width: "100%",
          bgcolor: grey[300],
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1000,
          height: "44px",
          fontSize: 16,
        }}
        type="number"
        component={"input"}
        {...props}
      />
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: 1,
          height: 1,
          position: "absolute",
          top: 0,
          px: 0.75,
          ".MuiIconButton-root": {
            bgcolor: `${theme.palette.secondary.main} !important`,
            color: theme.palette.text.primary,
          },
        })}
      >
        <IconButton size="small" onClick={() => props.onDecrement()}>
          <RemoveIcon />
        </IconButton>
        <IconButton size="small" onClick={() => props.onIncrement()}>
          <AddIcon />
        </IconButton>
      </Box>
    </div>
  );
}

export default NumberInputWithControls;
