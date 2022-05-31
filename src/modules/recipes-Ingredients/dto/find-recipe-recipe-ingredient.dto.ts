import { IsAlphanumeric, IsNumber, MaxLength } from "class-validator";

export class FindRecipeRecipeIngredientDto {
  @IsNumber()
  @MaxLength(11)
  @IsAlphanumeric()
  readonly recipe: number
}