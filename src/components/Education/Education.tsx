import { IEducationProps } from "./IEducationProps";
import { IGrade } from "../../lib/models/IEducation";
import styling from "./Education.module.css";

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
    <div className={styling.education}>
      <h3 className={styling.course} data-testid={"education-course"}>
        {course}
      </h3>
      <h4 className={styling.faculty} data-testid={"education-faculty"}>
        {faculty}
      </h4>
      <h5 className={styling.tenure} data-testid={"education-tenure"}>
        {tenure}
      </h5>
      <hr className={styling.divider} />
      {grades.map((grade: IGrade) => (
        <p key={grade.id} className={styling.grade} data-testid={"education-grade"}>
          {grade.value}
        </p>
      ))}
    </div>
  );
};
