import { IsAlphanumeric, IsString, MinLength } from "class-validator";

export class AddRecipeDto {
  @IsString()
  @MinLength(2)
  @IsAlphanumeric()
  readonly recipeName: string
}