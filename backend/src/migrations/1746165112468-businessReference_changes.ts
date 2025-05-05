import { MigrationInterface, QueryRunner } from 'typeorm';

export class BusinessReferenceChanges1746165112468
  implements MigrationInterface
{
  name = 'BusinessReferenceChanges1746165112468';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_28031cbd6ce4606bffd2731af1"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_28031cbd6ce4606bffd2731af1" ON "business_reference" ("first_name", "last_name", "email") `,
    );
  }
}
