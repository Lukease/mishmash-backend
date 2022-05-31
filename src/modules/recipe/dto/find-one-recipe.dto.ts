import { IsAlphanumeric, IsString, MinLength } from "class-validator";

export class FindOneRecipeDto {
  @IsString()
  @MinLength(2)
  @IsAlphanumeric()
  readonly recipeName: string
}