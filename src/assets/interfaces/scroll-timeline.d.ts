interface ScrollTimelineOptions {
  source?: Element | null;
  orientation?: 'block' | 'inline' | 'horizontal' | 'vertical';
  axis?: 'block' | 'inline' | 'x' | 'y';
  scrollOffsets?: Array<CSS.NumericValue | string>;
}

declare class ScrollTimeline implements AnimationTimeline {
  constructor(options?: ScrollTimelineOptions);
  readonly currentTime: number | null;
}

interface AnimationTimeline {
  // Add any missing properties or methods here
}

interface KeyframeAnimationOptions {
  timeline?: ScrollTimeline;
}
