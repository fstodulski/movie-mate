// src/app.d.ts
import type { Session, SupabaseClient } from '@supabase/supabase-js';

declare global {
  declare let adsbygoogle: Array<any>;
  namespace App {
    interface Locals {
      supabase: SupabaseClient;
      user: any;
      getSession(): Promise<Session | null>;
    }
    interface PageData {
      session: Session | null;
    }
    // interface Error {}
    // interface Platform {}
  }
}
