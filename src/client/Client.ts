import { ICurriculumVitae } from "./responses/ICurriculumVitae";
import { IClient } from "./IClient";

/**
 * The API Client.
 */
export class Client implements IClient {
  /**
   * Responsible for getting the content data and mapping into
   * our model.
   *
   * @returns the mapped data.
   */
  getContent = async (): Promise<ICurriculumVitae> => {
    const url = `/api/curriculum-vitae`;
    const response = await fetch(url);
    const data = await response.json();

    return {
      education: data.education.map((education: any) => ({
        course: education.course,
        faculty: education.faculty,
        grades:
          education.grades?.map((grade: any) => ({
            id: grade.id,
            value: grade.value
          })) || [],
        id: education.id,
        tenure: education.tenure
      })),
      experiences: data.experiences.map((experience: any) => ({
        company: experience.company,
        content: experience.text.map((content: any) => ({
          id: content.id,
          value: content.value
        })),
        id: experience.id,
        priority: experience.priority,
        role: experience.role,
        tenure: experience.tenure
      })),
      skills: {
        technical: data.skills.technical,
        soft: data.skills.soft
      },
      summary: {
        address: data.summary.address,
        content: data.summary.text.map((summary: any) => ({
          id: summary.id,
          value: summary.value
        })),
        email: data.summary.email,
        name: data.summary.name,
        role: data.summary.role,
        telephone: data.summary.telephone
      }
    };
  };
}
