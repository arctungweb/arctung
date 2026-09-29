/// <reference types="@cloudflare/workers-types" />

interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY?: string;
  INQUIRY_TO_EMAIL?: string;
}