import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTodosTable1623488533532 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "todos" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, status bool, CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todos"`);
    }

}
