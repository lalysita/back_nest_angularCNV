import { MigrationInterface, QueryRunner } from "typeorm";

export class TableUser1731681805378 implements MigrationInterface {
    name = 'TableUser1731681805378'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "mail" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`DROP TABLE "user" DROP COLUMN "mail"`);
        await queryRunner.query('ALTER TABLE "user" DROP COLUMN "name"');
    }

}
