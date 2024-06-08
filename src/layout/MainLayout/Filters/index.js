import { Box, Container, Stack, Typography } from "@mui/material";

const FilterItem = ({ label }) => (
  <Typography
    component={"a"}
    href="#"
    className="plain"
    sx={{
      color: "background.default",
      "&:hover": {
        color: "error.main",
      },
    }}
    fontWeight={700}
  >
    {label}
  </Typography>
);

function Filters() {
  return (
    <Box
      sx={{
        bgcolor: "text.primary",
        py: 1.25,
        display: { xs: "none", md: "flex" },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={5}
          direction="row"
          justifyContent={{ xs: "start", lg: "space-between" }}
          overflowX={"auto"}
        >
          <FilterItem label={"Men"} />
          <FilterItem label={"Women"} />
          <FilterItem label={"Unisex"} />
          <FilterItem label={"Kids"} />
          <FilterItem label={"Best Sellers"} />
          <FilterItem label={"New Arrivals"} />
        </Stack>
      </Container>
    </Box>
  );
}

export default Filters;
