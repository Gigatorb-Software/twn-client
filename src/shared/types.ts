import { ReactNode } from "react";

/**
 * A custom data type for `props` argument which represents
 * `{ children: ReactNode }` type.
 * @example
 * ```tsx
 * const fc = (props: ReactChild) => { return <></>; }
 * // OR
 * class cc extends Component<ReactChild> {
 *   constructor(props: ReactChild) {
 *     super(props);
 *   }
 * }
 * ```
 */
export interface ReactChild {
  children?: ReactNode;
}

/**
 * A custom data type for `props` argument which represents
 * `{ children: (value: any) => ReactNode; }` type.
 * @example
 * ```tsx
 * const fc = (props: ReactConsumerChild) => { return <></>; }
 * // OR
 * class cc extends Component<ReactConsumerChild> {
 *   constructor(props: ReactConsumerChild) {
 *     super(props);
 *   }
 * }
 * ```
 */
export interface ReactConsumerChild {
  children: (value: any) => ReactNode;
}
