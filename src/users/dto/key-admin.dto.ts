import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class KeyAdminDto {
    @ApiProperty({example: "key", description: "key"})
    @IsString()
    @IsNotEmpty()
    key: string;
}
