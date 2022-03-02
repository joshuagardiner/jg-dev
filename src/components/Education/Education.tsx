import { IGrade } from "../../lib/models/IEducation";
import { IEducationProps } from "./IEducationProps";
import styles from "./Education.module.scss";

/**
 * The Education component is responsible for rendering academic
 * details within the application Body.
 *
 * @param props the properties that can be passed to the component.
 * @returns the Education component.
 */
export const Education: React.FC<IEducationProps> = (props: IEducationProps) => {
  const { course, faculty, grades, tenure } = props;

  return (
    <>
      <h3 className={styles.course} data-testid={"education-course"}>
        {course}
      </h3>
      <h4 className={styles.faculty} data-testid={"education-faculty"}>
        {faculty}
      </h4>
      <h5 className={styles.tenure} data-testid={"education-tenure"}>
        {tenure}
      </h5>
      <hr className={styles.divider} />
      {grades.map((grade: IGrade) => (
        <p key={grade.id} className={styles.grade} data-testid={"education-grade"}>
          {grade.value}
        </p>
      ))}
    </>
  );
};
