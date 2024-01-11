/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

type NetlifyLocals = import("@astrojs/netlify").NetlifyLocals;

declare namespace App {
  interface Locals extends NetlifyLocals {
    // ...
  }
}
