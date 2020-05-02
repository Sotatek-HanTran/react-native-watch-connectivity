import {NativeModule, WatchPayload} from './native-module';
import {_subscribeToNativeWatchEvent, NativeWatchEvent} from './events';

export function updateApplicationContext(context: WatchPayload) {
  NativeModule.updateApplicationContext(context);
}

export type ApplicationContextListener = (context: WatchPayload | null) => void;

export function subscribeToApplicationContext(cb: ApplicationContextListener) {
  // noinspection JSIgnoredPromiseFromCall
  getApplicationContext(cb);
  return _subscribeToNativeWatchEvent(
    NativeWatchEvent.EVENT_APPLICATION_CONTEXT_RECEIVED,
    cb,
  );
}

export function getApplicationContext(
  cb: (err: null, context: WatchPayload | null) => void,
) {
  return new Promise((resolve) => {
    NativeModule.getApplicationContext((context) => {
      cb(null, context);
      resolve(context);
    });
  });
}