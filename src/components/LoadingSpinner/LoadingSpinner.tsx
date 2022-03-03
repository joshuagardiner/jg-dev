import { ILoadingSpinnerProps } from "./ILoadingSpinnerProps";
import styles from "./LoadingSpinner.module.scss";

/**
 * Responsible for the implementation of the LoadingSpinner.
 *
 * @param props the properties that can be passed into the component.
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
