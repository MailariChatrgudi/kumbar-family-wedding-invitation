import { useEffect, useMemo, useRef, useState } from "react";
import { FiMusic, FiVolumeX } from "react-icons/fi";

export function MusicToggle({ src }) {
  const audioRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const canPlay = useMemo(() => Boolean(src), [src]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.35;
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!canPlay) return;

    if (enabled) {
      audio.play().catch(() => {
        setEnabled(false);
      });
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [enabled, canPlay]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {canPlay ? (
        <audio ref={audioRef} src={src} loop preload="none" />
      ) : null}

      <button
        type="button"
        onClick={() => canPlay && setEnabled((v) => !v)}
        className={[
          "group flex items-center gap-2 rounded-full px-4 py-3",
          "bg-white/80 backdrop-blur-md shadow-[var(--shadow)] ring-1 ring-[var(--border)]",
          canPlay ? "hover:bg-white/90" : "opacity-60 cursor-not-allowed",
        ].join(" ")}
        aria-label={enabled ? "Mute background music" : "Play background music"}
      >
        <span className="text-[var(--gold)]">
          {enabled ? <FiMusic /> : <FiVolumeX />}
        </span>
        <span className="text-xs font-medium tracking-wide text-[var(--muted)]">
          {canPlay ? (enabled ? "Music On" : "Music Off") : "Music (add audio)"}
        </span>
      </button>
    </div>
  );
}

