import { ILoadingSpinnerProps } from "./ILoadingSpinnerProps";
import styles from "./LoadingSpinner.module.css";

/**
 * Responsible for implementing the LoadingSpinner.
 *
 * @param props The properties that can be past to the component.
 * @returns The LoadingSpinner component.
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
