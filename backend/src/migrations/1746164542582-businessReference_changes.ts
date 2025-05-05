import { MigrationInterface, QueryRunner } from 'typeorm';

export class BusinessReferenceChanges1746164542582
  implements MigrationInterface
{
  name = 'BusinessReferenceChanges1746164542582';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_28031cbd6ce4606bffd2731af1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "business_reference" DROP CONSTRAINT "UQ_fa70c4c58987feacc2676247f7a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "business_reference" DROP CONSTRAINT "UQ_decc84385d7f6538fa256001133"`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_28031cbd6ce4606bffd2731af1" ON "business_reference" ("first_name", "last_name", "email") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_28031cbd6ce4606bffd2731af1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "business_reference" ADD CONSTRAINT "UQ_decc84385d7f6538fa256001133" UNIQUE ("email")`,
    );
    await queryRunner.query(
      `ALTER TABLE "business_reference" ADD CONSTRAINT "UQ_fa70c4c58987feacc2676247f7a" UNIQUE ("contact_no")`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_28031cbd6ce4606bffd2731af1" ON "business_reference" ("first_name", "last_name", "email") `,
    );
  }
}
