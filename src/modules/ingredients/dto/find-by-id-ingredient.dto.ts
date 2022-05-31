import { IsAlphanumeric, IsNumber, MaxLength } from "class-validator"

export class FindByIdIngredientDto {
  @IsNumber()
  @MaxLength(11)
  @IsAlphanumeric()
  readonly ingredientId: number
}