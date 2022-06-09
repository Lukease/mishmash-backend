import { IsAlphanumeric, IsNumber, MaxLength } from "class-validator";

export class RemoveRecipeDto {
  @IsNumber()
  @MaxLength(11)
  @IsAlphanumeric()
  readonly recipesId: number
}