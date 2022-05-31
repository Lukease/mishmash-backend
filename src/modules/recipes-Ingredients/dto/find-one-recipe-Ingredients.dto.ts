import { IsAlphanumeric, IsNumber, MaxLength } from "class-validator";

export class FindOneRecipeIngredientsDto {
  @IsNumber()
  @MaxLength(11)
  @IsAlphanumeric()
  readonly recipesIngredientsId: number
}