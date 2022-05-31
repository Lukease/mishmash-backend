import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from "./lib/entity/ingredients.entity";
import { Recipe } from "./lib/entity/recipes.entity";
import { RecipesIngredients } from "./lib/entity/recipes-Ingredients.entity";
import { Connection } from "typeorm";
import { IngredientsModule } from "./modules/ingredients";
import { RecipeModule } from "./modules/recipe";
import { RecipesIngredientsModule } from "./modules/recipes-Ingredients";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'testDb',
      entities: [Ingredient, Recipe, RecipesIngredients],
      synchronize: true,
    }),
    IngredientsModule,
    RecipeModule,
    RecipesIngredientsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
