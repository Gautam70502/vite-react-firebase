import { MigrationInterface, QueryRunner } from 'typeorm';

export class MemberTableChange1746164345439 implements MigrationInterface {
  name = 'MemberTableChange1746164345439';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "members" ADD "is_approved" boolean DEFAULT false`,
    );
    await queryRunner.query(
      `ALTER TABLE "members" DROP CONSTRAINT "UQ_2714af51e3f7dd42cf66eeb08d6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "members" DROP CONSTRAINT "UQ_1abeabe75c38ae3ba40d1a92c2d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "members" DROP CONSTRAINT "UQ_0e34d83cff240e0df8a29a5041d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "members" DROP CONSTRAINT "UQ_32927249c47ead4a819369a8229"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "members" ADD CONSTRAINT "UQ_32927249c47ead4a819369a8229" UNIQUE ("gst_number")`,
    );
    await queryRunner.query(
      `ALTER TABLE "members" ADD CONSTRAINT "UQ_0e34d83cff240e0df8a29a5041d" UNIQUE ("secondary_contact_no")`,
    );
    await queryRunner.query(
      `ALTER TABLE "members" ADD CONSTRAINT "UQ_1abeabe75c38ae3ba40d1a92c2d" UNIQUE ("contact_no")`,
    );
    await queryRunner.query(
      `ALTER TABLE "members" ADD CONSTRAINT "UQ_2714af51e3f7dd42cf66eeb08d6" UNIQUE ("email")`,
    );
    await queryRunner.query(`ALTER TABLE "members" DROP COLUMN "is_approved"`);
  }
}
