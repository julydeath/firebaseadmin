import express from "express";
import cors from "cors";
import admin from "./firebase-admin.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/test", (req, res) => {
  res.json({ working: "ok" });
});

app.use("/create-user", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await admin.auth().createUser({
      email: email,
      password: password,
      displayName: displayName,
    });

    await admin.auth().setCustomUserClaims(user.uid, {
      "https://hasura.io/jwt/claims": {
        "x-hasura-allowed-roles": ["user"],
        "x-hasura-default-role": "user",
        "x-hasura-user-id": user.uid,
      },
    });

    return res.status(200).json({
      id: user.uid,
      email: user.email,
    });
  } catch (error) {
    return res.status(501).json({
      error: error.message,
    });
  }
});

app.listen(process.env.PORT);
