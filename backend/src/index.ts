import express from "express";
import cors from "cors";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import * as RecipeAPI from './recipe-api.ts';

const app = express();
const prismaClient = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/api/recipe/search", async (req, res) => {
  // GET http://localhost/api/recipes/search?searchTerm=burgers&page=1
  const searchTerm = req.query.searchTerm as string;
  const page = parseInt(req.query.page as string);
  const results = await RecipeAPI.searchRecipes(searchTerm, page);
  console.log("Search results:", results);
  return res.json(results);
});

app.get("/api/recipes/:recipeId/summary", async (req, res) => {});

app.post("/api/recipes/favourite", async (req, res) => {});

app.get("/api/recipes/favourite", async (req, res) => {});

app.delete("/api/recipes/favourite", async (req, res) => {});

app.listen(5001, () => {
  console.log("server running on localhost:5001");
  //console.log("");
});
