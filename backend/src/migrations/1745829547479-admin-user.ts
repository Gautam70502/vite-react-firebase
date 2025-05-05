import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class AdminUser1745829547479 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const hashedPassword = await bcrypt.hash('Admin@123', 10); // Use strong password and store securely in production
    await queryRunner.query(`
                  INSERT INTO "users" (
                    "first_name", "last_name", "user_name", "email", "renewal_due_date",
                    "password", "gender", "membership_status", "role","created_by"
                  ) VALUES (
                    'Admin', 'User', 'admin', 'admin@admin.com', NOW(),
                    '${hashedPassword}', 'male', 'active', 'admin','f81d4fae-7dec-11d0-a765-00a0c91e6bf6'
                  )
                `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
                    DELETE FROM "users" WHERE "email" = 'admin@admin.com'
                  `);
  }
}
