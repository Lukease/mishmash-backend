import { IsAlphanumeric, IsNumber, MaxLength } from "class-validator";

export class FindRecipeDto {
  @IsNumber()
  @MaxLength(11)
  @IsAlphanumeric()
  readonly ingredientsId: Array<number>
}