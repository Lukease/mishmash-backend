import { Body, Controller, Delete, Get, Patch, Post } from "@nestjs/common"
import { IngredientsService } from "./ingredients.service"
import {
  AddIngredientDto,
  RemoveIngredientDto,
  EditIngredientDto,
  FindOneIngredientDto,
  FindByIdIngredientDto
} from "./dto"

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get()
  getIngredientByName() {
    return this.ingredientsService.findAll()
  }

  @Get('by-name')
  getIngredientByOneName(@Body() dto: FindOneIngredientDto) {
    return this.ingredientsService.findName(dto.ingredientName)
  }

  @Get('by-id')
  getIngredientById(@Body() dto: FindByIdIngredientDto) {
    return this.ingredientsService.findId(dto.ingredientId)
  }

  @Post()
  addIngredient(@Body() dto: AddIngredientDto) {
    return this.ingredientsService.addIngredients(dto.ingredientName)
  }

  @Delete()
  removeIngredient(@Body() dto: RemoveIngredientDto) {
    return this.ingredientsService.removeIngredients(dto.ingredientId)
  }

  @Patch()
  editIngredient(@Body() dto: EditIngredientDto) {
    return this.ingredientsService.editIngredients(dto.ingredientId, dto.newIngredientName)
  }

}
