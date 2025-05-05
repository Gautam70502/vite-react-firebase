import { MigrationInterface, QueryRunner } from 'typeorm';

export class MemberTableChanges1746095067585 implements MigrationInterface {
  name = 'MemberTableChanges1746095067585';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "members" DROP COLUMN "invited_by"`);
    await queryRunner.query(`ALTER TABLE "members" ADD "invited_by" citext`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "members" DROP COLUMN "invited_by"`);
    await queryRunner.query(`ALTER TABLE "members" ADD "invited_by" uuid`);
  }
}
