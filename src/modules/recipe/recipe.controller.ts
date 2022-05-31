import { Body, Controller, Delete, Get, Post } from '@nestjs/common'
import { RecipeService } from './recipe.service'
import { FindOneRecipeDto, RemoveRecipeDto, AddRecipeDto } from "./dto";

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  getRecipeByName() {
    return this.recipeService.findAll()
  }

  @Get('by-name')
  getRecipeByOneName(@Body() dto: FindOneRecipeDto) {
    return this.recipeService.findName(dto.recipeName)
  }

  @Get('by-all')
  getRecipe() {
    return this.recipeService.findRecipe()
  }

  @Post()
  addRecipe(@Body() dto: AddRecipeDto) {
    return this.recipeService.addRecipe(dto.recipeName)
  }

  @Delete()
  removeRecipe(@Body() dto: RemoveRecipeDto) {
    return this.recipeService.removeRecipe(dto.recipesId)
  }

}
