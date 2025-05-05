// src/firebase/firebase.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as path from 'path';

@Injectable()
export class FirebaseService implements OnModuleInit {
  onModuleInit() {
    const filepath = path.resolve(
      __dirname,
      '../../src/firebase/',
      'gps-notify-4c27f-firebase-adminsdk-fbsvc-413991962b.json',
    );
    admin.initializeApp({
      credential: admin.credential.cert(filepath),
    });
  }

  async sendNotification(
    token: string,
    title: string,
    body: string,
    data?: Record<string, string>,
  ) {
    const message = {
      notification: {
        title,
        body,
      },
      token,
      data: data || {},
    };

    try {
      const response = await admin.messaging().send(message);
      return {
        status: true,
        message: '',
        response: response,
      };
    } catch (error) {
      console.error('Error sending notification:', error);
      throw error;
    }
  }
}
