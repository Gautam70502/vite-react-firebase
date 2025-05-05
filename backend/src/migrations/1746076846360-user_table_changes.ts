import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserTableChanges1746076846360 implements MigrationInterface {
  name = 'UserTableChanges1746076846360';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "is_active" boolean DEFAULT false`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_active"`);
  }
}
