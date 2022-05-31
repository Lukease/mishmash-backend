import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipesIngredientsService } from "./recipes-ingredients.service";
import { RecipesIngredientsController } from "./recipes-ingredients.controller";
import { RecipesIngredients } from "../../lib/entity/recipes-Ingredients.entity";
import { RecipeModule } from "../recipe";


@Module({
  imports: [TypeOrmModule.forFeature([RecipesIngredients]),forwardRef(() =>  RecipeModule)],
  providers: [RecipesIngredientsService],
  controllers: [RecipesIngredientsController],
})
export class RecipesIngredientsModule {}