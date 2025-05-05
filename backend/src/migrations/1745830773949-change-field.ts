import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeField1745830773949 implements MigrationInterface {
  name = 'ChangeField1745830773949';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "chapter" DROP CONSTRAINT "FK_44decbc4d4e21befbfa7ce4ce8f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "chapter" RENAME COLUMN "region_id" TO "city_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "chapter" ADD CONSTRAINT "FK_3a6c81e9e93af4bc7f1d14ac61d" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "chapter" DROP CONSTRAINT "FK_3a6c81e9e93af4bc7f1d14ac61d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "chapter" RENAME COLUMN "city_id" TO "region_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "chapter" ADD CONSTRAINT "FK_44decbc4d4e21befbfa7ce4ce8f" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
