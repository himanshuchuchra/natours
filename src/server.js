import { app } from "./app.js";

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(`ERROR - Running on PORT: ${process.env.PORT}`);
  }
  console.log(
    `SUCCESS - Server is running on http://localhost:${process.env.PORT}`
  );
});
