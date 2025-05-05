import { MigrationInterface, QueryRunner } from 'typeorm';

export class MemberTableAddUserTableChanges1746090428579
  implements MigrationInterface
{
  name = 'MemberTableAddUserTableChanges1746090428579';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "business_reference" DROP CONSTRAINT "FK_b39e38f237a8d20a2b8ec9b4717"`,
    );
    await queryRunner.query(
      `CREATE TABLE "members" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "chapter_id" citext NOT NULL, "city" citext NOT NULL, "invited_by" uuid, "heard_about_bni" text, "first_name" citext NOT NULL, "last_name" citext NOT NULL, "company_name" citext NOT NULL, "industry" character varying, "business_address1" citext NOT NULL, "business_address2" citext NOT NULL, "business_city" citext NOT NULL, "business_state" citext NOT NULL, "business_pincode" character varying(10) NOT NULL, "email" character varying NOT NULL, "website" character varying, "contact_no" character varying(10) NOT NULL, "secondary_contact_no" character varying(10) NOT NULL, "gst_number" character varying(30) NOT NULL, "bni_commitment_agreement" boolean DEFAULT true, "substitute_commitment" boolean DEFAULT true, "referral_commitment" boolean DEFAULT true, "referral_ability_rating" numeric, "previous_bni_membership" boolean DEFAULT false, "other_networking_organizations" boolean DEFAULT false, CONSTRAINT "UQ_2714af51e3f7dd42cf66eeb08d6" UNIQUE ("email"), CONSTRAINT "UQ_1abeabe75c38ae3ba40d1a92c2d" UNIQUE ("contact_no"), CONSTRAINT "UQ_0e34d83cff240e0df8a29a5041d" UNIQUE ("secondary_contact_no"), CONSTRAINT "UQ_32927249c47ead4a819369a8229" UNIQUE ("gst_number"), CONSTRAINT "PK_28b53062261b996d9c99fa12404" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_2714af51e3f7dd42cf66eeb08d" ON "members" ("email") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_1abeabe75c38ae3ba40d1a92c2" ON "members" ("contact_no") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0e34d83cff240e0df8a29a5041" ON "members" ("secondary_contact_no") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_32927249c47ead4a819369a822" ON "members" ("gst_number") `,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "city"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "invited_by"`);
    await queryRunner.query(
      `ALTER TABLE "users" DROP COLUMN "bni_commitment_agreement"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP COLUMN "substitute_commitment"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP COLUMN "referral_commitment"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP COLUMN "referral_ability_rating"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP COLUMN "previous_bni_membership"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP COLUMN "other_networking_organizations"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP COLUMN "heard_about_bni"`,
    );
    await queryRunner.query(
      `ALTER TABLE "business_reference" ADD CONSTRAINT "FK_b39e38f237a8d20a2b8ec9b4717" FOREIGN KEY ("user_id") REFERENCES "members"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "business_reference" DROP CONSTRAINT "FK_b39e38f237a8d20a2b8ec9b4717"`,
    );
    await queryRunner.query(`ALTER TABLE "users" ADD "heard_about_bni" text`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "other_networking_organizations" boolean DEFAULT false`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "previous_bni_membership" boolean DEFAULT false`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "referral_ability_rating" numeric`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "referral_commitment" boolean DEFAULT true`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "substitute_commitment" boolean DEFAULT true`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "bni_commitment_agreement" boolean DEFAULT true`,
    );
    await queryRunner.query(`ALTER TABLE "users" ADD "invited_by" uuid`);
    await queryRunner.query(`ALTER TABLE "users" ADD "city" uuid`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_32927249c47ead4a819369a822"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_0e34d83cff240e0df8a29a5041"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_1abeabe75c38ae3ba40d1a92c2"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_2714af51e3f7dd42cf66eeb08d"`,
    );
    await queryRunner.query(`DROP TABLE "members"`);
    await queryRunner.query(
      `ALTER TABLE "business_reference" ADD CONSTRAINT "FK_b39e38f237a8d20a2b8ec9b4717" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
