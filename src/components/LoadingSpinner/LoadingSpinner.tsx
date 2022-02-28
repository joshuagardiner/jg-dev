import { ILoadingSpinnerProps } from "./ILoadingSpinnerProps";
import styles from "./LoadingSpinner.module.css";

/**
 * Responsible for implementing the LoadingSpinner.
 *
 * @param props the properties that can be passed to the component.
 * @returns the LoadingSpinner component.
 */
export const LoadingSpinner: React.FC<ILoadingSpinnerProps> = (
  props: ILoadingSpinnerProps
): JSX.Element => {
  const { text } = props;

  return (
    <div data-testid={"loading-spinner"}>
      <div className={styles.spin} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};
