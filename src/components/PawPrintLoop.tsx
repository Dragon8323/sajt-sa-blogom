"use client";

import { useSyncExternalStore } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { PawIcon } from "@/components/icons";

const PAW_PRINT_LOTTIE_URL =
  "https://lottie.host/c4eff9e1-8fb6-4b65-92f1-df83f2d71c15/HKplJ8J5vl.json";

function noopSubscribe() {
  return () => {};
}

function getMountedSnapshot() {
  return true;
}

function getMountedServerSnapshot() {
  return false;
}

function subscribeToReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function PawPrintLoop() {
  const mounted = useSyncExternalStore(
    noopSubscribe,
    getMountedSnapshot,
    getMountedServerSnapshot,
  );
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  return (
    <div aria-hidden="true" className="flex h-full w-full items-center justify-center">
      {mounted ? (
        <DotLottieReact
          src={PAW_PRINT_LOTTIE_URL}
          loop={!reducedMotion}
          autoplay={!reducedMotion}
          className="h-full w-full"
        />
      ) : (
        <PawIcon className="size-16 text-amber-400" />
      )}
    </div>
  );
}
