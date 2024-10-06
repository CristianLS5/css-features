interface ScrollTimelineOptions {
  source?: Element;
  axis?: 'block' | 'inline' | 'x' | 'y';
}

declare class ScrollTimeline implements AnimationTimeline {
  constructor(options?: ScrollTimelineOptions);
  readonly currentTime: number | null;
}
