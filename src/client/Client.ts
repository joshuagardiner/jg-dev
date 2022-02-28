import { IContentResponse } from "./responses/IContent";
import { IClient } from "./IClient";
import { IEducation, IGrade } from "../lib/models/IEducation";

/**
 * The API Client.
 */
export class Client implements IClient {
  /**
   * Responsible for getting the Content data and mapping into
   * our Content model.
   *
   * @returns the Content data.
   */
  getContent = async (): Promise<IContentResponse> => {
    const url = `/api/Content`;
    const response = await fetch(url);
    const data = await response.json();

    return {
      content: {
        education: data.education.map((education: IEducation) => ({
          course: education.course,
          faculty: education.faculty,
          grades:
            education.grades?.map((grade: IGrade) => ({
              id: grade.id,
              value: grade.value
            })) || [],
          id: education.id,
          tenure: education.tenure
        })),
        experiences: data.experiences.map((experience: any) => ({
          company: experience.company,
          content: experience.text,
          role: experience.role,
          tenure: experience.tenure
        })),
        skills: {
          technical: data.skills.technical,
          soft: data.skills.soft
        },
        summary: {
          address: data.summary.address,
          content: {
            p1: data.summary.text[0],
            p2: data.summary.text[1]
          },
          email: data.summary.email,
          name: data.summary.name,
          role: data.summary.role,
          telephone: data.summary.telephone
        }
      }
    };
  };
}
