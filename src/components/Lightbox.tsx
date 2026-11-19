import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Facility } from '../data';

type LightboxProps = {
  items: Facility[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export default function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const item = items[index];

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        onIndexChange((index - 1 + items.length) % items.length);
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        onIndexChange((index + 1) % items.length);
        return;
      }
      if (event.key === 'Tab') {
        const focusable = [closeRef.current, prevRef.current, nextRef.current].filter(
          (element): element is HTMLButtonElement => Boolean(element),
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const current = document.activeElement;

        if (!focusable.includes(current as HTMLButtonElement)) {
          event.preventDefault();
          first?.focus();
        } else if (event.shiftKey && current === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && current === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [index, items.length, onClose, onIndexChange]);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      aria-describedby="lightbox-caption"
    >
      <div className="lightbox__backdrop" onClick={onClose} aria-hidden="true" />
      <div className="lightbox__panel">
        <div className="lightbox__topbar">
          <span className="lightbox__counter">
            {index + 1} / {items.length} · sample image
          </span>
          <button className="lightbox__close" type="button" ref={closeRef} onClick={onClose} aria-label="Close image viewer">
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <figure className="lightbox__figure">
          <img src={item.image} alt={item.imageAlt} width={1200} height={751} decoding="async" />
          <figcaption id="lightbox-caption">
            <strong id="lightbox-title">{item.title}</strong>
            <span>{item.caption}</span>
            <span className="lightbox__detail">{item.detail}</span>
          </figcaption>
        </figure>
        <div className="lightbox__nav" role="group" aria-label="Image viewer controls">
          <button
            className="lightbox__arrow"
            type="button"
            ref={prevRef}
            onClick={() => onIndexChange((index - 1 + items.length) % items.length)}
            aria-label="Previous sample image"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <span>Use ← → keys or the buttons to browse</span>
          <button
            className="lightbox__arrow"
            type="button"
            ref={nextRef}
            onClick={() => onIndexChange((index + 1) % items.length)}
            aria-label="Next sample image"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
