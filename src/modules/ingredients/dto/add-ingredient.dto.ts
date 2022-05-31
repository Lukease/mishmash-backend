import { IsAlphanumeric, IsString, MinLength } from "class-validator";

export class AddIngredientDto {
  @IsString()
  @MinLength(2)
  @IsAlphanumeric()
  readonly ingredientName: string
}