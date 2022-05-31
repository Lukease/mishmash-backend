import { IsAlphanumeric, IsNumber, MaxLength } from "class-validator";

export class RemoveIngredientDto {
  @IsNumber()
  @MaxLength(11)
  @IsAlphanumeric()
  readonly ingredientId: number
}