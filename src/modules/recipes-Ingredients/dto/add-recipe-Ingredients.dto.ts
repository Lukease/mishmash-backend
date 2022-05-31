import { IsAlphanumeric, IsNumber, MaxLength } from "class-validator";

export class AddRecipeIngredientsDto {
  @IsNumber()
  @MaxLength(11)
  @IsAlphanumeric()
  readonly recipesId: number

  @IsNumber()
  @MaxLength(11)
  @IsAlphanumeric()
  readonly ingredientsId: number
}