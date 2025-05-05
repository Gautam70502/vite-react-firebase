import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewDb1745829497676 implements MigrationInterface {
  name = 'NewDb1745829497676';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."address_type_enum" AS ENUM('address', 'billing')`,
    );
    await queryRunner.query(
      `CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "user_id" uuid NOT NULL, "address_line" character varying NOT NULL, "state" citext NOT NULL, "country" citext NOT NULL, "pincode" character varying(10) NOT NULL, "type" "public"."address_type_enum" NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_35cd6c3fafec0bb5d072e24ea2" ON "address" ("user_id") `,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."contacts_type_enum" AS ENUM('home', 'mobile', 'phone')`,
    );
    await queryRunner.query(
      `CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "user_id" uuid NOT NULL, "contact_no" character varying(10) NOT NULL, "type" "public"."contacts_type_enum" NOT NULL, CONSTRAINT "UQ_00953f7fa98e0a0d20a43cf519c" UNIQUE ("contact_no"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_af0a71ac1879b584f255c49c99" ON "contacts" ("user_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_00953f7fa98e0a0d20a43cf519" ON "contacts" ("contact_no") `,
    );
    await queryRunner.query(
      `CREATE TABLE "company" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "user_id" uuid NOT NULL, "name" citext NOT NULL, "logo" character varying, "industry" character varying, "classification" character varying, "fax" character varying, "tollfree" bigint, "gst_number" character varying(30) NOT NULL, "gst_register_state" character varying(50) NOT NULL, "bussiness_summry" character varying, "keyword" character varying, CONSTRAINT "UQ_eb47ab42b0c2f9a23d10feb3e69" UNIQUE ("gst_number"), CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_879141ebc259b4c0544b3f1ea4" ON "company" ("user_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_eb47ab42b0c2f9a23d10feb3e6" ON "company" ("gst_number") `,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."referral_given_referral_hotness_enum" AS ENUM('hot', 'tepid')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."referral_given_referral_type_enum" AS ENUM('inside', 'outside')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."referral_given_referral_receive_status_enum" AS ENUM('all', 'not_contacted_yet', 'contacted', 'got_the_business', 'did_not_get_the_business', 'no_response', 'not_a_good_fit', 'confidential')`,
    );
    await queryRunner.query(
      `CREATE TABLE "referral_given" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "to" uuid NOT NULL, "referral_given_by" uuid NOT NULL, "referral" character varying(50) NOT NULL, "referral_status" text NOT NULL, "address" character varying, "telephone" character varying(10) NOT NULL, "email" character varying(50) NOT NULL, "comments" character varying, "referral_hotness" "public"."referral_given_referral_hotness_enum" NOT NULL, "referral_type" "public"."referral_given_referral_type_enum" NOT NULL DEFAULT 'inside', "referral_receive_status" "public"."referral_given_referral_receive_status_enum" NOT NULL DEFAULT 'not_contacted_yet', CONSTRAINT "PK_18b7f195d7e5d316f93070fa0b1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_93f465cc0d8fc8643b295291af" ON "referral_given" ("to") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_d3f369bc4720f43a25f0bb323a" ON "referral_given" ("referral_given_by") `,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."tyfcb_bussiness_type_enum" AS ENUM('new', 'repeat')`,
    );
    await queryRunner.query(
      `CREATE TABLE "tyfcb" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "thanks_to" uuid NOT NULL, "reffreral_amount" integer NOT NULL, "bussiness_type" "public"."tyfcb_bussiness_type_enum" NOT NULL, "comments" character varying, "thanks_by" uuid NOT NULL, CONSTRAINT "PK_6ac46fcc9b1ea49ecd898cafa6a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_2de5ab3951c381d7dc16d85b6c" ON "tyfcb" ("thanks_to") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_1eb5a8a25ed81c683f4b7183a6" ON "tyfcb" ("thanks_by") `,
    );
    await queryRunner.query(
      `CREATE TABLE "chapter_course" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "chapter_id" uuid NOT NULL, "title" character varying NOT NULL, "credit" integer NOT NULL, CONSTRAINT "UQ_0543797c8298658258107fc2f8d" UNIQUE ("title"), CONSTRAINT "PK_be4eebd798cc26bd6bded42f8c0" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0d46acb2ce5b590a60828e62d9" ON "chapter_course" ("chapter_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "ceu" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "chapter_course_id" uuid NOT NULL, "user_id" uuid NOT NULL, "quantity_earned" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_a368577a133c8efb871b04bcc0d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_3325a59c1714becc86ad57999f" ON "ceu" ("chapter_course_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ca9e9628b2df79f3552d5da477" ON "ceu" ("user_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "gained_bio" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "goal" character varying, "accomplishment" character varying, "intrest" character varying, "networks" character varying, "skills" character varying, "user_id" uuid NOT NULL, CONSTRAINT "REL_cffbfeadaf9ccbef3fc47312d0" UNIQUE ("user_id"), CONSTRAINT "PK_754f925197fb501bb2835b80630" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_cffbfeadaf9ccbef3fc47312d0" ON "gained_bio" ("user_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "mybio" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "year_in_bussiness" integer, "previous_types_of_jobs" character varying, "hobbies" character varying, "city_of_residance" character varying, "years_in_that_city" character varying, "my_burning_desire_is_to" character varying, "something_no_one_here_knows_about_me" character varying, "my_key_to_success" character varying, "user_id" uuid NOT NULL, CONSTRAINT "REL_f247de228fc563516d0e7852db" UNIQUE ("user_id"), CONSTRAINT "PK_16942fa63deac7c9bbadaef9bf9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_f247de228fc563516d0e7852db" ON "mybio" ("user_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "top_profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "ideal_referral" character varying, "top_product" character varying, "top_problem_solved" character varying, "my_favourite_bni_story" character varying, "my_ideal_referral_partner" character varying, "user_id" uuid NOT NULL, CONSTRAINT "REL_e458518d035241cbd15ac636ff" UNIQUE ("user_id"), CONSTRAINT "PK_5e02147bbf5146e22345067fa00" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_e458518d035241cbd15ac636ff" ON "top_profile" ("user_id") `,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."chapter_users_chapter_role_enum" AS ENUM('president', 'vicepresident', 'secretarytreasurer', 'chaptermember')`,
    );
    await queryRunner.query(
      `CREATE TABLE "chapter_users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "chapter_id" uuid NOT NULL, "user_id" uuid NOT NULL, "chapter_role" "public"."chapter_users_chapter_role_enum" NOT NULL DEFAULT 'chaptermember', CONSTRAINT "PK_88c92772033f39d451fc8c3868b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_578ec7af64213cce070e62431c" ON "chapter_users" ("chapter_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_50190f49f0a1bcd071c0e57dbc" ON "chapter_users" ("user_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "user_fcm_token" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "fcm_token" character varying NOT NULL, "user_id" uuid NOT NULL, "chapter_id" uuid, CONSTRAINT "PK_89b95af80e4c7ec368d8397dba9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b212aff419400432e231f4b60d" ON "user_fcm_token" ("user_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_6553a6d9afacd8ca651a992d90" ON "user_fcm_token" ("chapter_id") `,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."notification_type_enum" AS ENUM('immediate', 'ontime')`,
    );
    await queryRunner.query(
      `CREATE TABLE "notification" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "title" citext NOT NULL, "message" character varying NOT NULL, "image" character varying, "type" "public"."notification_type_enum" NOT NULL DEFAULT 'immediate', "date" TIMESTAMP WITH TIME ZONE NOT NULL, "is_read" boolean NOT NULL DEFAULT false, "sender_id" uuid NOT NULL, "receiver_id" uuid NOT NULL, CONSTRAINT "PK_705b6c7cdf9b2c2ff7ac7872cb7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_56023c91b76b36125acd4dcd9c" ON "notification" ("sender_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_90543bacf107cdd564e9b62cd2" ON "notification" ("receiver_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "one_to_ones" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "meet_with" uuid NOT NULL, "location" character varying NOT NULL, "topic" character varying NOT NULL, "meeting_date" TIMESTAMP WITH TIME ZONE NOT NULL, "invited_by" uuid NOT NULL, "invitedBy" uuid, "meetWith" uuid, CONSTRAINT "PK_7beefae090451a0366b34221a47" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ea8e4b034d467fe7a71b6edd6f" ON "one_to_ones" ("meet_with") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_c5c3809bb437a8c6ddab8b824c" ON "one_to_ones" ("invited_by") `,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."testimonial_type_enum" AS ENUM('request', 'given')`,
    );
    await queryRunner.query(
      `CREATE TABLE "testimonial" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "message" character varying NOT NULL, "to" uuid NOT NULL, "from" uuid NOT NULL, "type" "public"."testimonial_type_enum" NOT NULL, CONSTRAINT "PK_e1aee1c726db2d336480c69f7cb" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_analytics" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "user_id" uuid NOT NULL, "tyfcb" integer NOT NULL DEFAULT '0', "total_revenue" integer NOT NULL DEFAULT '0', "one_to_ones" integer NOT NULL DEFAULT '0', "referral_given" integer NOT NULL DEFAULT '0', "referral_received" integer NOT NULL DEFAULT '0', "visitor" integer NOT NULL DEFAULT '0', "userId" uuid, CONSTRAINT "REL_a35875208b1b5b8a9e8bc20119" UNIQUE ("userId"), CONSTRAINT "PK_23e622f18cec061f740c403ff75" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "business_reference" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" citext NOT NULL, "last_name" citext NOT NULL, "business_name" citext NOT NULL, "contact_no" character varying(10), "email" character varying NOT NULL, "business_relationship" character varying, "user_id" uuid, CONSTRAINT "UQ_fa70c4c58987feacc2676247f7a" UNIQUE ("contact_no"), CONSTRAINT "UQ_decc84385d7f6538fa256001133" UNIQUE ("email"), CONSTRAINT "PK_f8b48c88ce7771f543819ee9b5d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_fa70c4c58987feacc2676247f7" ON "business_reference" ("contact_no") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_decc84385d7f6538fa25600113" ON "business_reference" ("email") `,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_28031cbd6ce4606bffd2731af1" ON "business_reference" ("first_name", "last_name", "email") `,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."users_gender_enum" AS ENUM('male', 'female')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."users_membership_status_enum" AS ENUM('active', 'deactive')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."users_role_enum" AS ENUM('member', 'admin')`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "first_name" citext NOT NULL, "last_name" citext NOT NULL, "user_name" character varying(20) NOT NULL, "email" character varying NOT NULL, "renewal_due_date" TIMESTAMP WITH TIME ZONE NOT NULL, "password" character varying NOT NULL, "gender" "public"."users_gender_enum" NOT NULL, "profile" character varying, "language" character varying, "timezone" character varying(50), "website" character varying, "social_media_link" character varying, "membership_status" "public"."users_membership_status_enum" NOT NULL DEFAULT 'deactive', "role" "public"."users_role_enum" NOT NULL DEFAULT 'member', "city" uuid, "invited_by" uuid, "heard_about_bni" text, "bni_commitment_agreement" boolean DEFAULT true, "substitute_commitment" boolean DEFAULT true, "referral_commitment" boolean DEFAULT true, "referral_ability_rating" numeric, "previous_bni_membership" boolean DEFAULT false, "other_networking_organizations" boolean DEFAULT false, CONSTRAINT "UQ_074a1f262efaca6aba16f7ed920" UNIQUE ("user_name"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_b6c400469d3f1b4bb9cf62e10f" ON "users" ("first_name", "last_name", "email") `,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."chapters_users_meeting_attendance_enum" AS ENUM('absent', 'present')`,
    );
    await queryRunner.query(
      `CREATE TABLE "chapters_users_meeting" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "attendance" "public"."chapters_users_meeting_attendance_enum" NOT NULL, "join_at" TIMESTAMP WITH TIME ZONE, "user_id" uuid NOT NULL, "meeting_id" uuid NOT NULL, CONSTRAINT "PK_61e54ba41e3b1874b087013b742" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_1b44ba15f8bc3982d7d581d8dd" ON "chapters_users_meeting" ("user_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_26f81633eb284a250a2489f208" ON "chapters_users_meeting" ("meeting_id") `,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."meeting_meeting_type_enum" AS ENUM('inperson')`,
    );
    await queryRunner.query(
      `CREATE TABLE "meeting" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "name" citext NOT NULL, "location" citext NOT NULL, "meeting_type" "public"."meeting_meeting_type_enum" NOT NULL DEFAULT 'inperson', "meeting_date" TIMESTAMP WITH TIME ZONE NOT NULL, "chapter_id" uuid NOT NULL, CONSTRAINT "PK_dccaf9e4c0e39067d82ccc7bb83" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_be7c930f140dd82a0522bb38ed" ON "meeting" ("chapter_id") `,
    );
    await queryRunner.query(
      `CREATE TABLE "city" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "name" character varying NOT NULL, "region_id" uuid NOT NULL, CONSTRAINT "UQ_f8c0858628830a35f19efdc0ecf" UNIQUE ("name"), CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "country" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "name" character varying NOT NULL, CONSTRAINT "UQ_2c5aa339240c0c3ae97fcc9dc4c" UNIQUE ("name"), CONSTRAINT "PK_bf6e37c231c4f4ea56dcd887269" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "region" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "name" character varying NOT NULL, "country_id" uuid NOT NULL, CONSTRAINT "UQ_8d766fc1d4d2e72ecd5f6567a02" UNIQUE ("name"), CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "chapter" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "region_id" uuid NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_02782d7f837ca2989ce87f03ca0" UNIQUE ("name"), CONSTRAINT "PK_275bd1c62bed7dff839680614ca" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."visitor_visitor_type_enum" AS ENUM('visitor', 'guest', 'substitute')`,
    );
    await queryRunner.query(
      `CREATE TABLE "visitor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" uuid NOT NULL, "updated_by" uuid, "deleted_by" uuid, "register_by" uuid NOT NULL, "title" citext NOT NULL, "first_name" citext NOT NULL, "last_name" citext NOT NULL, "email" character varying(50) NOT NULL, "phone" character varying(10) NOT NULL, "address" citext, "company_name" citext, "visitor_type" "public"."visitor_visitor_type_enum" NOT NULL DEFAULT 'visitor', "industry" character varying NOT NULL, "chapter_id" uuid NOT NULL, CONSTRAINT "UQ_e1b0fa4a31c6e2b15f18f9db59a" UNIQUE ("email"), CONSTRAINT "UQ_2f354ba401df891c7a787fa17f0" UNIQUE ("phone"), CONSTRAINT "PK_ba6ae421d03de90a99ed838741d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_54c3587984c93abd050160b4fc" ON "visitor" ("register_by") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_965bc6548d242b49abc1eb6ed5" ON "visitor" ("chapter_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "address" ADD CONSTRAINT "FK_35cd6c3fafec0bb5d072e24ea20" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "contacts" ADD CONSTRAINT "FK_af0a71ac1879b584f255c49c99a" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "company" ADD CONSTRAINT "FK_879141ebc259b4c0544b3f1ea4c" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "referral_given" ADD CONSTRAINT "FK_d3f369bc4720f43a25f0bb323a8" FOREIGN KEY ("referral_given_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "tyfcb" ADD CONSTRAINT "FK_1eb5a8a25ed81c683f4b7183a6a" FOREIGN KEY ("thanks_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "chapter_course" ADD CONSTRAINT "FK_0d46acb2ce5b590a60828e62d92" FOREIGN KEY ("chapter_id") REFERENCES "chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ceu" ADD CONSTRAINT "FK_3325a59c1714becc86ad57999fd" FOREIGN KEY ("chapter_course_id") REFERENCES "chapter_course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ceu" ADD CONSTRAINT "FK_ca9e9628b2df79f3552d5da4778" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "gained_bio" ADD CONSTRAINT "FK_cffbfeadaf9ccbef3fc47312d06" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "mybio" ADD CONSTRAINT "FK_f247de228fc563516d0e7852dbb" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "top_profile" ADD CONSTRAINT "FK_e458518d035241cbd15ac636ffd" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "chapter_users" ADD CONSTRAINT "FK_50190f49f0a1bcd071c0e57dbcb" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "chapter_users" ADD CONSTRAINT "FK_578ec7af64213cce070e62431cf" FOREIGN KEY ("chapter_id") REFERENCES "chapter"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_fcm_token" ADD CONSTRAINT "FK_b212aff419400432e231f4b60d9" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_fcm_token" ADD CONSTRAINT "FK_6553a6d9afacd8ca651a992d90f" FOREIGN KEY ("chapter_id") REFERENCES "chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "notification" ADD CONSTRAINT "FK_56023c91b76b36125acd4dcd9c5" FOREIGN KEY ("sender_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "notification" ADD CONSTRAINT "FK_90543bacf107cdd564e9b62cd20" FOREIGN KEY ("receiver_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "one_to_ones" ADD CONSTRAINT "FK_88f9338a1643d092c75dc454178" FOREIGN KEY ("invitedBy") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "one_to_ones" ADD CONSTRAINT "FK_6b7ab221500f0b80fd940e33386" FOREIGN KEY ("meetWith") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "testimonial" ADD CONSTRAINT "FK_a87ccd4c20349158c3e0e01bff5" FOREIGN KEY ("from") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "testimonial" ADD CONSTRAINT "FK_2e8890da2eea88352538a245910" FOREIGN KEY ("to") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_analytics" ADD CONSTRAINT "FK_a35875208b1b5b8a9e8bc20119f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "business_reference" ADD CONSTRAINT "FK_b39e38f237a8d20a2b8ec9b4717" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "chapters_users_meeting" ADD CONSTRAINT "FK_1b44ba15f8bc3982d7d581d8ddd" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "chapters_users_meeting" ADD CONSTRAINT "FK_26f81633eb284a250a2489f208d" FOREIGN KEY ("meeting_id") REFERENCES "meeting"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "meeting" ADD CONSTRAINT "FK_be7c930f140dd82a0522bb38ed4" FOREIGN KEY ("chapter_id") REFERENCES "chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "city" ADD CONSTRAINT "FK_0b663dca66456beb75ec93de9fc" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "region" ADD CONSTRAINT "FK_26b43e0b19bc5dc2c480da151b6" FOREIGN KEY ("country_id") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "chapter" ADD CONSTRAINT "FK_44decbc4d4e21befbfa7ce4ce8f" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "visitor" ADD CONSTRAINT "FK_965bc6548d242b49abc1eb6ed55" FOREIGN KEY ("chapter_id") REFERENCES "chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "visitor" ADD CONSTRAINT "FK_54c3587984c93abd050160b4fc0" FOREIGN KEY ("register_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "visitor" DROP CONSTRAINT "FK_54c3587984c93abd050160b4fc0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "visitor" DROP CONSTRAINT "FK_965bc6548d242b49abc1eb6ed55"`,
    );
    await queryRunner.query(
      `ALTER TABLE "chapter" DROP CONSTRAINT "FK_44decbc4d4e21befbfa7ce4ce8f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "region" DROP CONSTRAINT "FK_26b43e0b19bc5dc2c480da151b6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "city" DROP CONSTRAINT "FK_0b663dca66456beb75ec93de9fc"`,
    );
    await queryRunner.query(
      `ALTER TABLE "meeting" DROP CONSTRAINT "FK_be7c930f140dd82a0522bb38ed4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "chapters_users_meeting" DROP CONSTRAINT "FK_26f81633eb284a250a2489f208d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "chapters_users_meeting" DROP CONSTRAINT "FK_1b44ba15f8bc3982d7d581d8ddd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "business_reference" DROP CONSTRAINT "FK_b39e38f237a8d20a2b8ec9b4717"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_analytics" DROP CONSTRAINT "FK_a35875208b1b5b8a9e8bc20119f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "testimonial" DROP CONSTRAINT "FK_2e8890da2eea88352538a245910"`,
    );
    await queryRunner.query(
      `ALTER TABLE "testimonial" DROP CONSTRAINT "FK_a87ccd4c20349158c3e0e01bff5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "one_to_ones" DROP CONSTRAINT "FK_6b7ab221500f0b80fd940e33386"`,
    );
    await queryRunner.query(
      `ALTER TABLE "one_to_ones" DROP CONSTRAINT "FK_88f9338a1643d092c75dc454178"`,
    );
    await queryRunner.query(
      `ALTER TABLE "notification" DROP CONSTRAINT "FK_90543bacf107cdd564e9b62cd20"`,
    );
    await queryRunner.query(
      `ALTER TABLE "notification" DROP CONSTRAINT "FK_56023c91b76b36125acd4dcd9c5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_fcm_token" DROP CONSTRAINT "FK_6553a6d9afacd8ca651a992d90f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_fcm_token" DROP CONSTRAINT "FK_b212aff419400432e231f4b60d9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "chapter_users" DROP CONSTRAINT "FK_578ec7af64213cce070e62431cf"`,
    );
    await queryRunner.query(
      `ALTER TABLE "chapter_users" DROP CONSTRAINT "FK_50190f49f0a1bcd071c0e57dbcb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "top_profile" DROP CONSTRAINT "FK_e458518d035241cbd15ac636ffd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "mybio" DROP CONSTRAINT "FK_f247de228fc563516d0e7852dbb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "gained_bio" DROP CONSTRAINT "FK_cffbfeadaf9ccbef3fc47312d06"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ceu" DROP CONSTRAINT "FK_ca9e9628b2df79f3552d5da4778"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ceu" DROP CONSTRAINT "FK_3325a59c1714becc86ad57999fd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "chapter_course" DROP CONSTRAINT "FK_0d46acb2ce5b590a60828e62d92"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tyfcb" DROP CONSTRAINT "FK_1eb5a8a25ed81c683f4b7183a6a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "referral_given" DROP CONSTRAINT "FK_d3f369bc4720f43a25f0bb323a8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "company" DROP CONSTRAINT "FK_879141ebc259b4c0544b3f1ea4c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "contacts" DROP CONSTRAINT "FK_af0a71ac1879b584f255c49c99a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "address" DROP CONSTRAINT "FK_35cd6c3fafec0bb5d072e24ea20"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_965bc6548d242b49abc1eb6ed5"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_54c3587984c93abd050160b4fc"`,
    );
    await queryRunner.query(`DROP TABLE "visitor"`);
    await queryRunner.query(`DROP TYPE "public"."visitor_visitor_type_enum"`);
    await queryRunner.query(`DROP TABLE "chapter"`);
    await queryRunner.query(`DROP TABLE "region"`);
    await queryRunner.query(`DROP TABLE "country"`);
    await queryRunner.query(`DROP TABLE "city"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_be7c930f140dd82a0522bb38ed"`,
    );
    await queryRunner.query(`DROP TABLE "meeting"`);
    await queryRunner.query(`DROP TYPE "public"."meeting_meeting_type_enum"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_26f81633eb284a250a2489f208"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_1b44ba15f8bc3982d7d581d8dd"`,
    );
    await queryRunner.query(`DROP TABLE "chapters_users_meeting"`);
    await queryRunner.query(
      `DROP TYPE "public"."chapters_users_meeting_attendance_enum"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b6c400469d3f1b4bb9cf62e10f"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_97672ac88f789774dd47f7c8be"`,
    );
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
    await queryRunner.query(
      `DROP TYPE "public"."users_membership_status_enum"`,
    );
    await queryRunner.query(`DROP TYPE "public"."users_gender_enum"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_28031cbd6ce4606bffd2731af1"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_decc84385d7f6538fa25600113"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_fa70c4c58987feacc2676247f7"`,
    );
    await queryRunner.query(`DROP TABLE "business_reference"`);
    await queryRunner.query(`DROP TABLE "user_analytics"`);
    await queryRunner.query(`DROP TABLE "testimonial"`);
    await queryRunner.query(`DROP TYPE "public"."testimonial_type_enum"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_c5c3809bb437a8c6ddab8b824c"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ea8e4b034d467fe7a71b6edd6f"`,
    );
    await queryRunner.query(`DROP TABLE "one_to_ones"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_90543bacf107cdd564e9b62cd2"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_56023c91b76b36125acd4dcd9c"`,
    );
    await queryRunner.query(`DROP TABLE "notification"`);
    await queryRunner.query(`DROP TYPE "public"."notification_type_enum"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_6553a6d9afacd8ca651a992d90"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b212aff419400432e231f4b60d"`,
    );
    await queryRunner.query(`DROP TABLE "user_fcm_token"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_50190f49f0a1bcd071c0e57dbc"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_578ec7af64213cce070e62431c"`,
    );
    await queryRunner.query(`DROP TABLE "chapter_users"`);
    await queryRunner.query(
      `DROP TYPE "public"."chapter_users_chapter_role_enum"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_e458518d035241cbd15ac636ff"`,
    );
    await queryRunner.query(`DROP TABLE "top_profile"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_f247de228fc563516d0e7852db"`,
    );
    await queryRunner.query(`DROP TABLE "mybio"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_cffbfeadaf9ccbef3fc47312d0"`,
    );
    await queryRunner.query(`DROP TABLE "gained_bio"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ca9e9628b2df79f3552d5da477"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_3325a59c1714becc86ad57999f"`,
    );
    await queryRunner.query(`DROP TABLE "ceu"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_0d46acb2ce5b590a60828e62d9"`,
    );
    await queryRunner.query(`DROP TABLE "chapter_course"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_1eb5a8a25ed81c683f4b7183a6"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_2de5ab3951c381d7dc16d85b6c"`,
    );
    await queryRunner.query(`DROP TABLE "tyfcb"`);
    await queryRunner.query(`DROP TYPE "public"."tyfcb_bussiness_type_enum"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_d3f369bc4720f43a25f0bb323a"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_93f465cc0d8fc8643b295291af"`,
    );
    await queryRunner.query(`DROP TABLE "referral_given"`);
    await queryRunner.query(
      `DROP TYPE "public"."referral_given_referral_receive_status_enum"`,
    );
    await queryRunner.query(
      `DROP TYPE "public"."referral_given_referral_type_enum"`,
    );
    await queryRunner.query(
      `DROP TYPE "public"."referral_given_referral_hotness_enum"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_eb47ab42b0c2f9a23d10feb3e6"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_879141ebc259b4c0544b3f1ea4"`,
    );
    await queryRunner.query(`DROP TABLE "company"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_00953f7fa98e0a0d20a43cf519"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_af0a71ac1879b584f255c49c99"`,
    );
    await queryRunner.query(`DROP TABLE "contacts"`);
    await queryRunner.query(`DROP TYPE "public"."contacts_type_enum"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_35cd6c3fafec0bb5d072e24ea2"`,
    );
    await queryRunner.query(`DROP TABLE "address"`);
    await queryRunner.query(`DROP TYPE "public"."address_type_enum"`);
  }
}
