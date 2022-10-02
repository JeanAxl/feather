/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as functions from 'firebase-functions';

const port = process.env.PORT || 5001;
const server = express();

export const createApp = async (expressInstance) => {
  const appServer = await NestFactory.create(
    AppModule,
    expressInstance ? new ExpressAdapter(expressInstance) : undefined
  );
  return appServer;
};

createApp(server)
  .then((appServer) => {
    appServer.init();
    Logger.log(`🚀 Application is running on: http://localhost:${port}`);
  })
  .catch((error) => {
    console.log(error);
    Logger.error(`❌ Application could not start`, error);
  });

export const api = functions.https.onRequest(server);
