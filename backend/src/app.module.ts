import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { dbConfig } from './config/db.config';
import { ChapterModule } from './chapter/chapter.module';
import { VisitorModule } from './visitor/visitor.module';
import { MeetingModule } from './meeting/meeting.module';
import { ReferralGivenModule } from './referralgiven/referralgiven.module';
import { OneToOneModule } from './one-to-one/one-to-one.module';
import { TyfcbModule } from './tyfcb/tyfcb.module';
import { CeuModule } from './ceu/ceu.module';
import { GainedbioModule } from './gainedbio/gainedbio.module';
import { UserBioModule } from './user-bio/user-bio.module';
import { TopprofileModule } from './topprofile/topprofile.module';
import { ChapterCourseModule } from './chapter-course/chapter-course.module';
import { ChaptersUsersMeetingModule } from './chapters-users-meeting/chapters-users-meeting.module';
import { CountryModule } from './country/country.module';
import { RegionModule } from './region/region.module';
import { NotificationModule } from './notification/notification.module';
import { ChaptersUsersModule } from './chapters_users/chapters_users.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { AddressModule } from './address/address.module';
import { CompanyModule } from './company/company.module';
import { ContactsModule } from './contact/contact.module';
import { ConfigModule } from '@nestjs/config';
// import { FirebaseModule } from './firebase/firebase.module';
import { MemberRequestModule } from './member-request/member-request.module';
import { CityModule } from './city/city.module';
import { UserAnalyticsModule } from './user-analytics/user-analytics.module';
import { UserfcmtokenModule } from './userfcmtoken/userfcmtoken.module';
import { TestimonialModule } from './testimonial/testimonial.module';
// import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        port: 587,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
    }),
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    ChapterModule,
    VisitorModule,
    MeetingModule,
    ReferralGivenModule,
    OneToOneModule,
    TyfcbModule,
    CeuModule,
    GainedbioModule,
    UserBioModule,
    TopprofileModule,
    ChapterCourseModule,
    ChaptersUsersMeetingModule,
    CountryModule,
    RegionModule,
    ChaptersUsersModule,
    AddressModule,
    CompanyModule,
    ContactsModule,
    NotificationModule,
    UserfcmtokenModule,
    UserAnalyticsModule,
    TestimonialModule,
    CityModule,
    MemberRequestModule,
    // ReferralreceiveModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
